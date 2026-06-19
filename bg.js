// bg.js — animated background canvas

(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildParticles();
  }

  function buildParticles() {
    particles = [];
    const count = Math.floor((W * H) / 5800);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random() * 0.45 + 0.05,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.012,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08,
      });
    }
  }

  function drawGradient() {
    // deep purple space bg
    const grad = ctx.createRadialGradient(W * 0.38, H * 0.42, 0, W * 0.5, H * 0.5, W * 0.85);
    grad.addColorStop(0,   '#1e0e38');
    grad.addColorStop(0.35,'#150d28');
    grad.addColorStop(0.7, '#0e0820');
    grad.addColorStop(1,   '#070513');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // soft nebula blobs
    const blobs = [
      { x: W*0.15, y: H*0.25, r: W*0.28, c1:'rgba(90,30,130,0.07)', c2:'transparent' },
      { x: W*0.82, y: H*0.65, r: W*0.24, c1:'rgba(60,20,110,0.06)', c2:'transparent' },
      { x: W*0.55, y: H*0.8,  r: W*0.20, c1:'rgba(100,40,150,0.05)', c2:'transparent' },
    ];
    blobs.forEach(b => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, b.c1);
      g.addColorStop(1, b.c2);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  let t = 0;
  function tick() {
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, W, H);
    drawGradient();

    t += 0.012;

    particles.forEach(p => {
      // drift
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // twinkle
      const alpha = p.a * (0.6 + 0.4 * Math.sin(t * p.speed * 80 + p.phase));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,200,255,${alpha})`;
      ctx.fill();
    });
  }

  window.addEventListener('resize', resize);
  resize();
  tick();

  // Fade in ambient stickers
  setTimeout(() => {
    document.querySelectorAll('.amb').forEach((el, i) => {
      setTimeout(() => { el.style.opacity = '1'; }, i * 120);
    });
  }, 800);

})();
