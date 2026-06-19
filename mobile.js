// mobile.js — single page scrollable layout for small screens

(function () {

  const allEntries = [
    {
      type: 'cover',
      content: `
        <div class="m-cover">
          <div class="m-cover-stars">
            <span style="top:12%;left:18%;font-size:24px">✦</span>
            <span style="top:22%;right:14%;font-size:16px">✧</span>
            <span style="top:72%;left:12%;font-size:18px">✦</span>
            <span style="top:80%;right:18%;font-size:14px">✧</span>
            <span style="top:48%;left:8%;font-size:10px">✦</span>
          </div>
          <div class="m-cover-inner">
            <div class="m-cover-deco">a collection of thoughts · 2026</div>
            <div class="m-cover-title">dear every girl<br>i've been</div>
            <div class="m-cover-sub">by diya rathod</div>
          </div>
          <div class="m-cover-hint">scroll to read ✦</div>
        </div>`
    },
    {
      type: 'intro',
      content: `
        <div class="m-card m-intro">
          <div class="m-tape" style="width:60px;top:-10px;left:50%;transform:translateX(-50%) rotate(-2deg)"></div>
          <div class="m-sticker" style="top:12px;right:14px">🌸</div>
          <div class="m-label">a letter</div>
          <div class="m-intro-title">a letter to every girl i've been</div>
          <div class="m-body">
            <p>to every girl i've been,</p>
            <p>i'm sorry.</p>
            <p>i'm sorry for how often i wished you away. how badly i wanted to become someone else. someone happier. someone easier. someone less afraid.</p>
            <p>i didn't understand then what i know now. you were never standing in the way of my future. you were carrying me toward it.</p>
            <p>and if i could meet every version of myself one last time, i don't think i'd give them advice. i think i'd just hold them for a little longer.</p>
            <p>because they spent years trying to become me. and there are still days when all i want is to become them again.</p>
          </div>
          <div class="m-sig">— diya ♡</div>
        </div>`
    },
    ...entries.map((e, i) => ({
      type: 'entry',
      num: i + 1,
      content: `
        <div class="m-card m-entry">
          <div class="m-tape" style="width:${50+i*4}px;top:-10px;left:${30+i*5}%;transform:translateX(-50%) rotate(${[-2,2,-1,3,-2,1,-3,2,-1][i]}deg)"></div>
          <div class="m-sticker" style="top:10px;right:12px">${['🌙','💭','🩷','📓','🫧','🌿','🎞️','🤍','☁️'][i]}</div>
          <div class="m-entry-num">${String(i+1).padStart(2,'0')}</div>
          <div class="m-entry-title">${e.title}</div>
          <div class="m-entry-mood">${e.mood}</div>
          <div class="m-body">
            ${e.left}
            ${e.right}
          </div>
          ${i % 3 === 0 ? `<div class="m-washi" style="width:48px;bottom:14px;left:16px;transform:rotate(${-2+i%3}deg)"></div>` : ''}
          <div class="m-corner-fold"></div>
        </div>`
    })),
    {
      type: 'more',
      content: `
        <div class="m-card m-more">
          <div class="m-tape" style="width:65px;top:-10px;left:50%;transform:translateX(-50%) rotate(-1deg)"></div>
          <div class="m-sticker" style="top:12px;right:14px;font-size:20px">🌙</div>
          <div class="m-more-big">more to come.</div>
          <div class="m-more-sub">she's still figuring it out.<br>and that's the whole point.</div>
          <div class="m-more-check">✦ &nbsp; check back &nbsp; ✦</div>
        </div>`
    },
    {
      type: 'closing',
      content: `
        <div class="m-card m-closing">
          <div class="m-tape" style="width:55px;top:-10px;left:50%;transform:translateX(-50%) rotate(2deg)"></div>
          <div class="m-closing-line">to every girl i've been —<br><span class="m-closing-em">i'd choose you again.</span></div>
          <div class="m-sig" style="margin-top:20px">— diya ♡</div>
          <div class="m-closing-meta">dear every girl i've been · diya rathod · 2026</div>
        </div>`
    }
  ];

  // Build mobile layout
  function buildMobile() {
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:0;background:#0d0818;min-height:100vh;overflow-x:hidden;font-family:Caveat,cursive;';

    // bg canvas
    const bgC = document.createElement('canvas');
    bgC.id = 'bg-canvas';
    bgC.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;';
    document.body.appendChild(bgC);

    // inject mobile styles
    const st = document.createElement('style');
    st.textContent = mobileCSS;
    document.head.appendChild(st);

    // scroll container
    const wrap = document.createElement('div');
    wrap.id = 'm-wrap';
    document.body.appendChild(wrap);

    allEntries.forEach((item, i) => {
      const section = document.createElement('div');
      section.className = 'm-section';
      section.innerHTML = item.content;
      section.style.opacity = '0';
      section.style.transform = 'translateY(28px)';
      wrap.appendChild(section);
    });

    // intersection observer for scroll-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.2,0.64,1)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.m-section').forEach(s => observer.observe(s));

    // trigger bg.js
    setTimeout(() => {
      if (typeof initBg === 'function') initBg();
      else loadBg();
    }, 100);
  }

  function loadBg() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = [];
      const count = Math.floor((W * H) / 6000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random()*W, y: Math.random()*H,
          r: Math.random()*1.2+0.2,
          a: Math.random()*0.4+0.05,
          phase: Math.random()*Math.PI*2,
          speed: 0.007+Math.random()*0.013,
          vx: (Math.random()-0.5)*0.1,
          vy: (Math.random()-0.5)*0.07,
        });
      }
    }

    let t = 0;
    function tick() {
      requestAnimationFrame(tick);
      ctx.clearRect(0,0,W,H);
      const grad = ctx.createRadialGradient(W*.38,H*.42,0,W*.5,H*.5,W*.85);
      grad.addColorStop(0,'#1e0e38');
      grad.addColorStop(0.4,'#150d28');
      grad.addColorStop(1,'#070513');
      ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
      t+=0.012;
      particles.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=W; if(p.x>W)p.x=0;
        if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        const alpha = p.a*(0.6+0.4*Math.sin(t*p.speed*80+p.phase));
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(220,200,255,${alpha})`; ctx.fill();
      });
    }
    window.addEventListener('resize', resize);
    resize(); tick();
  }

  const mobileCSS = `
    * { box-sizing: border-box; margin: 0; padding: 0; }

    #m-wrap {
      position: relative;
      z-index: 1;
      padding: 0 16px 80px;
      max-width: 480px;
      margin: 0 auto;
    }

    .m-section {
      margin-bottom: 28px;
    }

    /* COVER */
    .m-cover {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 40px 20px;
    }
    .m-cover-stars span {
      position: absolute;
      color: rgba(232,224,245,0.2);
      pointer-events: none;
    }
    .m-cover-inner { text-align: center; position: relative; z-index: 1; }
    .m-cover-deco {
      font-family: 'Reenie Beanie', cursive;
      font-size: 12px;
      color: rgba(232,224,245,0.3);
      letter-spacing: 0.1em;
      margin-bottom: 16px;
    }
    .m-cover-title {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      font-size: clamp(34px, 10vw, 52px);
      color: #e8e0f5;
      line-height: 1.15;
      margin-bottom: 14px;
    }
    .m-cover-sub {
      font-family: 'Just Another Hand', cursive;
      font-size: 18px;
      color: rgba(232,224,245,0.4);
      letter-spacing: 0.08em;
    }
    .m-cover-hint {
      position: absolute;
      bottom: 32px;
      font-family: 'Just Another Hand', cursive;
      font-size: 14px;
      color: rgba(232,224,245,0.25);
      letter-spacing: 0.1em;
      animation: mpulse 2.5s ease-in-out infinite;
    }
    @keyframes mpulse { 0%,100%{opacity:0.25;} 50%{opacity:0.65;} }

    /* CARDS */
    .m-card {
      background: #f5f0ff;
      border-radius: 3px 3px 3px 3px;
      padding: 32px 22px 26px;
      position: relative;
      box-shadow:
        0 4px 24px rgba(0,0,0,0.35),
        0 1px 4px rgba(0,0,0,0.2),
        2px 2px 0 rgba(180,150,220,0.15);
      overflow: hidden;
    }
    .m-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0px, transparent 27px,
        rgba(180,150,220,0.08) 27px, rgba(180,150,220,0.08) 28px
      );
      pointer-events: none;
      z-index: 0;
    }
    .m-card > * { position: relative; z-index: 1; }

    /* TAPE */
    .m-tape {
      position: absolute;
      height: 18px;
      background: rgba(180,150,220,0.35);
      border-radius: 1px;
      z-index: 10;
      pointer-events: none;
    }
    .m-sticker {
      position: absolute;
      font-size: 18px;
      z-index: 10;
      opacity: 0.75;
      pointer-events: none;
    }
    .m-washi {
      position: absolute;
      height: 12px;
      background: repeating-linear-gradient(
        90deg,
        rgba(180,150,220,0.3) 0px, rgba(200,170,240,0.4) 8px,
        rgba(160,130,200,0.25) 16px
      );
      border-radius: 2px;
      z-index: 5;
      pointer-events: none;
    }
    .m-corner-fold {
      position: absolute;
      bottom: 0; right: 0;
      width: 0; height: 0;
      border-style: solid;
      border-width: 0 0 20px 20px;
      border-color: transparent transparent rgba(180,150,220,0.22) transparent;
      z-index: 8;
    }

    /* INTRO */
    .m-intro { background: #f5f0ff; }
    .m-label {
      font-family: 'Reenie Beanie', cursive;
      font-size: 12px;
      color: #b89dd4;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .m-intro-title {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      font-size: clamp(20px,6vw,28px);
      color: #4a3060;
      line-height: 1.2;
      margin-bottom: 16px;
    }
    .m-sig {
      font-family: 'Reenie Beanie', cursive;
      font-size: 20px;
      color: #7c5c9e;
      margin-top: 12px;
    }

    /* ENTRIES */
    .m-entry { background: #faf7ff; }
    .m-entry-num {
      font-family: 'Reenie Beanie', cursive;
      font-size: 13px;
      color: #b89dd4;
      margin-bottom: 4px;
      opacity: 0.6;
    }
    .m-entry-title {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      font-size: clamp(18px,5.5vw,24px);
      color: #4a3060;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .m-entry-mood {
      font-family: 'Reenie Beanie', cursive;
      font-size: 13px;
      color: #b89dd4;
      margin-bottom: 14px;
      display: block;
    }
    .m-body {
      font-family: 'Caveat', cursive;
      font-size: clamp(15px,4.2vw,17px);
      color: #2e1f3e;
      line-height: 1.85;
      opacity: 0.86;
    }
    .m-body p { margin-bottom: 8px; }
    .m-body em { font-style: italic; color: #7c5c9e; }

    /* MORE TO COME */
    .m-more { background: #f5f0ff; text-align: center; padding: 40px 22px; }
    .m-more-big {
      font-family: 'Caveat', cursive;
      font-weight: 700;
      font-size: clamp(28px,8vw,40px);
      color: #4a3060;
      margin-bottom: 12px;
    }
    .m-more-sub {
      font-family: 'Just Another Hand', cursive;
      font-size: 16px;
      color: #b89dd4;
      line-height: 1.7;
      margin-bottom: 16px;
    }
    .m-more-check {
      font-family: 'Just Another Hand', cursive;
      font-size: 13px;
      color: rgba(180,150,220,0.5);
      letter-spacing: 0.1em;
    }

    /* CLOSING */
    .m-closing { background: linear-gradient(160deg,#f0eaff,#f8f4ff); text-align: center; padding: 44px 22px; }
    .m-closing-line {
      font-family: 'Caveat', cursive;
      font-weight: 600;
      font-size: clamp(18px,5.5vw,24px);
      color: #4a3060;
      line-height: 1.6;
      font-style: italic;
    }
    .m-closing-em { color: #7c5c9e; }
    .m-closing-meta {
      margin-top: 20px;
      font-family: 'Just Another Hand', cursive;
      font-size: 12px;
      color: rgba(180,150,220,0.4);
      letter-spacing: 0.1em;
    }
  `;

  // Check if mobile and init
  if (window.innerWidth <= 768) {
    buildMobile();
  }

  // Also handle resize (tablet rotation etc)
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.getElementById('m-wrap')) {
      location.reload();
    }
  });

})();
