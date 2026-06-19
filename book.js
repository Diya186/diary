// book.js — page flip engine

(function () {

  /* ── STATE ── */
  let current = 0; // spread index
  let isFlipping = false;
  let bookOpen = false;

  const total = spreads.length;

  const coverEl      = document.getElementById('cover');
  const bookPagesEl  = document.getElementById('book-pages');
  const leftDisplay  = document.getElementById('left-display');
  const rightDisplay = document.getElementById('right-display');
  const flipCanvas   = document.getElementById('flip-canvas');
  const flipCtx      = flipCanvas.getContext('2d');
  const spineEl      = document.getElementById('spine');
  const navEl        = document.getElementById('nav');
  const btnPrev      = document.getElementById('btn-prev');
  const btnNext      = document.getElementById('btn-next');
  const pgInd        = document.getElementById('pg-ind');

  /* ── BUILD TOC ── */
  function buildTOC() {
    const list = document.getElementById('toc-list');
    if (!list) return;
    entries.forEach((e, i) => {
      const div = document.createElement('div');
      div.className = 'toc-item';
      div.innerHTML = `<span class="toc-num">${i+1}.</span><span class="toc-name">${e.title}</span><span class="toc-pg">${(i+2)*2-1}</span>`;
      div.addEventListener('click', () => {
        const targetSpread = i + 2;
        jumpToSpread(targetSpread);
      });
      list.appendChild(div);
    });
  }

  /* ── RENDER SPREAD ── */
  function renderSpread(idx) {
    const s = spreads[idx];
    leftDisplay.innerHTML  = s.left;
    rightDisplay.innerHTML = s.right;
    buildTOC(); // safe to call always, only populates if element exists
    updateNav(idx);
  }

  /* ── UPDATE NAV ── */
  const spreadLabels = [
    'intro',
    'contents',
    ...entries.map((_, i) => `${i+1} of ${entries.length}`),
    'more to come',
    'the end'
  ];

  function updateNav(idx) {
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === total - 1;
    pgInd.textContent = spreadLabels[idx] || '';
  }

  /* ── FLIP ANIMATION using Canvas ── */
  let flipRAF = null;
  let flipAnim = null; // { dir, progress, fromLeft, fromRight, toLeft, toRight }

  function resizeFlipCanvas() {
    flipCanvas.width  = bookPagesEl.offsetWidth;
    flipCanvas.height = bookPagesEl.offsetHeight;
  }

  // Render a page into an offscreen canvas and return ImageData
  function pageToImage(html, isRight) {
    // We'll use a hidden div rendered into position
    // Since we can't screenshot divs easily, we do a smooth CSS flip instead
    // The canvas is used for the "mid-flip" shadow/gradient effect only
    return null;
  }

  /* ── CSS-BASED FLIP ── */
  // The flip works by:
  // 1. Placing a clone of the current page on top
  // 2. Animating it rotating away with CSS
  // 3. Revealing the new page underneath

  function doFlip(direction) {
    if (isFlipping) return;

    const nextIdx = direction === 'forward' ? current + 1 : current - 1;
    if (nextIdx < 0 || nextIdx >= total) return;

    isFlipping = true;

    // Pre-render next spread into hidden divs
    const nextSpread = spreads[nextIdx];

    // Clone the departing page
    const clone = document.createElement('div');
    clone.style.cssText = `
      position: absolute;
      top: 0; bottom: 0;
      width: 50%;
      z-index: 40;
      transform-origin: ${direction === 'forward' ? 'left' : 'right'} center;
      transform-style: preserve-3d;
      overflow: hidden;
      pointer-events: none;
    `;

    if (direction === 'forward') {
      // Right page flips to the left
      clone.style.right = '0';
      clone.innerHTML = rightDisplay.innerHTML;
      clone.style.background = 'var(--page-r)';
    } else {
      // Left page flips to the right
      clone.style.left = '0';
      clone.innerHTML = leftDisplay.innerHTML;
      clone.style.background = 'var(--page-l)';
    }

    bookPagesEl.appendChild(clone);

    // Show next spread under the clone immediately
    renderSpread(nextIdx);
    current = nextIdx;

    // Add page shadow overlay during flip
    const shadow = document.createElement('div');
    shadow.style.cssText = `
      position:absolute;
      ${direction === 'forward' ? 'left:0' : 'right:0'};
      top:0;bottom:0;width:50%;
      background: linear-gradient(${direction==='forward'?'to right':'to left'},
        rgba(0,0,0,0.18) 0%, transparent 100%);
      z-index:39;
      pointer-events:none;
      opacity:0;
      transition: opacity 0.42s ease;
    `;
    bookPagesEl.appendChild(shadow);
    requestAnimationFrame(() => { shadow.style.opacity = '1'; });

    // Animate the clone
    const dur = 420;
    const start = performance.now();

    function animFrame(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // ease in-out quad
      const deg = direction === 'forward'
        ? ease * -180
        : ease * 180;

      clone.style.transform = `rotateY(${deg}deg)`;

      // add backface darkness as it flips
      const darkness = Math.sin(ease * Math.PI) * 0.35;
      clone.style.filter = `brightness(${1 - darkness})`;

      if (p < 1) {
        flipRAF = requestAnimationFrame(animFrame);
      } else {
        clone.remove();
        shadow.remove();
        isFlipping = false;
      }
    }

    flipRAF = requestAnimationFrame(animFrame);
  }

  /* ── JUMP (TOC click) ── */
  function jumpToSpread(idx) {
    if (isFlipping || idx === current) return;
    // fast-jump without animation for TOC
    current = idx;
    renderSpread(idx);
  }
  window.goToSpread = jumpToSpread;

  /* ── PUBLIC NAV ── */
  window.nextPage = function () { doFlip('forward'); };
  window.prevPage = function () { doFlip('backward'); };

  /* ── CLICK ZONES ── */
  window.handlePageClick = function (side) {
    if (isFlipping) return;
    if (side === 'right' && current < total - 1) doFlip('forward');
    if (side === 'left'  && current > 0)         doFlip('backward');
  };

  /* ── KEYBOARD ── */
  document.addEventListener('keydown', e => {
    if (!bookOpen) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') window.nextPage();
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   window.prevPage();
  });

  /* ── OPEN BOOK ── */
  window.openBook = function () {
    if (bookOpen) return;
    bookOpen = true;

    // Animate cover flipping open
    coverEl.style.transformOrigin = 'left center';
    coverEl.style.transition = 'transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease';
    coverEl.style.transform = 'rotateY(-160deg)';
    coverEl.style.opacity = '0';

    setTimeout(() => {
      coverEl.style.display = 'none';
      spineEl.style.display = 'block';
      bookPagesEl.style.display = 'block';
      navEl.style.display = 'flex';
      resizeFlipCanvas();
      renderSpread(0);

      // entrance: pages slide in from right
      bookPagesEl.style.opacity = '0';
      bookPagesEl.style.transform = 'translateX(18px) scale(0.98)';
      bookPagesEl.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.2,0.64,1)';
      requestAnimationFrame(() => {
        bookPagesEl.style.opacity = '1';
        bookPagesEl.style.transform = 'translateX(0) scale(1)';
      });
    }, 580);
  };

  /* ── RESIZE ── */
  window.addEventListener('resize', () => {
    if (bookOpen) resizeFlipCanvas();
  });

  /* ── CURSOR HINTS on hover ── */
  leftDisplay.addEventListener('mouseenter', () => {
    if (current > 0) leftDisplay.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><text y=\'24\' font-size=\'22\'>👈</text></svg>") 16 16, w-resize';
  });
  rightDisplay.addEventListener('mouseenter', () => {
    if (current < total - 1) rightDisplay.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'><text y=\'24\' font-size=\'22\'>👉</text></svg>") 16 16, e-resize';
  });

})();
