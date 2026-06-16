// ── TYPEWRITER — HERO ROLE (loop) ──
const titleEl = document.getElementById('typewriter-title');
if(titleEl){
  const words = ['Graphic Designer','AI Builder','Creative Technologist','YouTuber','ML Engineer'];
  let wIdx=0, cIdx=0, del=false;

  function loopType(){
    const word = words[wIdx];
    if(!del){
      cIdx++;
      titleEl.textContent = word.slice(0,cIdx);
      if(cIdx===word.length){ del=true; setTimeout(loopType,1800); return; }
      setTimeout(loopType,100);
    } else {
      cIdx--;
      titleEl.textContent = word.slice(0,cIdx);
      if(cIdx===0){ del=false; wIdx=(wIdx+1)%words.length; setTimeout(loopType,350); return; }
      setTimeout(loopType,50);
    }
  }
  setTimeout(loopType,800);
}

// ── TYPEWRITER — HERO DESC (one-shot) ──
const descEl = document.getElementById('typewriter-desc');
if(descEl){
  const full = descEl.dataset.text || '';
  descEl.textContent='';
  let i=0;

  function typeDesc(){
    if(i<full.length){
      descEl.textContent += full[i++];
      setTimeout(typeDesc,22);
    } else {
      descEl.classList.remove('tw-cursor');
    }
  }
  setTimeout(typeDesc,1400);
}

// ── SKILLS TABS ──
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'ai') animateBars();
}

// ── PROGRESS BARS ──
function animateBars() {
  setTimeout(() => {
    document.querySelectorAll('.ai-card').forEach(c => c.classList.add('animated'));
  }, 100);
}

// ── DRAG SCROLL ──
const scr = document.getElementById('aiScroll');
if (scr) {
  let isDown = false, startX, scrollL;
  scr.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - scr.offsetLeft; scrollL = scr.scrollLeft; });
  scr.addEventListener('mouseleave', () => isDown = false);
  scr.addEventListener('mouseup', () => isDown = false);
  scr.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); scr.scrollLeft = scrollL - (e.pageX - scr.offsetLeft - startX); });
}

// ── ORBIT NODES ──
const orbitNodes = [
  {svg:'<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="#fff"/>',r:80,angle:0},
  {svg:'<path d="M11.97 0C5.815 0 6.2 2.656 6.2 2.656l.007 2.752h5.87v.826H3.89S0 5.77 0 11.982c0 6.214 3.437 5.993 3.437 5.993h2.05v-2.883s-.11-3.437 3.382-3.437h5.83s3.27.053 3.27-3.162V3.316S18.467 0 11.97 0zm-3.23 1.874a1.056 1.056 0 1 1 0 2.113 1.056 1.056 0 0 1 0-2.113z" fill="#3670A0"/><path d="M12.03 24c6.155 0 5.77-2.656 5.77-2.656l-.007-2.752H11.92v-.826h8.187S24 18.23 24 12.018c0-6.214-3.437-5.993-3.437-5.993h-2.05v2.883s.11 3.437-3.382 3.437H9.3s-3.27-.053-3.27 3.162v5.177S5.533 24 12.03 24zm3.23-1.874a1.056 1.056 0 1 1 0-2.113 1.056 1.056 0 0 1 0 2.113z" fill="#FFD43B"/>',r:80,angle:72},
  {svg:'<path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-6.168-3.564v14.02L12.46 24V0l10.262 5.856v5.31z" fill="#FF6F00"/>',r:80,angle:144},
  {svg:'<path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 14.01 9.866 9.866 0 0 0 14.01 0 9.865 9.865 0 0 0 0-14.01L16.947 9.08a4.577 4.577 0 0 1 0 6.5 4.577 4.577 0 0 1-6.5 0 4.577 4.577 0 0 1 0-6.5l1.558-1.56z" fill="#EE4C2C"/><circle cx="16.001" cy="5.999" r="1.664" fill="#EE4C2C"/>',r:80,angle:216},
  {svg:'<path d="M8 24c2.208 0 4-1.792 4-4v-4H8a4 4 0 0 0 0 8z" fill="#0ACF83"/><path d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#A259FF"/><path d="M4 4a4 4 0 0 1 4-4h4v8H8A4 4 0 0 1 4 4z" fill="#F24E1E"/><path d="M12 0h4a4 4 0 0 1 0 8h-4V0z" fill="#FF7262"/><path d="M20 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" fill="#1ABCFE"/>',r:80,angle:288},
  {svg:'<rect width="24" height="24" rx="2" fill="#007ACC" opacity=".9"/><path d="M4.5 8.5v7M9 8.5v7M4.5 12H9M14 8.5v7h5l-2.5-3.5 2.5-3.5H14z" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',r:130,angle:30},
  {svg:'<path d="M11.5 0C5.159 0 0 5.159 0 11.5S5.159 23 11.5 23 23 17.841 23 11.5 17.841 0 11.5 0zm1 17.5h-2v-7h2v7zm0-9h-2V6.5h2V8.5z" fill="#F37626"/>',r:130,angle:200},
];

const wrap = document.getElementById('orbitWrap');
if (wrap) {
  const cx = 160, cy = 160;
  orbitNodes.forEach(n => {
    const div = document.createElement('div');
    div.className = 'orbit-node';
    const rad = n.angle * Math.PI / 180;
    div.style.cssText = `left:${cx + n.r * Math.cos(rad) - 18}px;top:${cy + n.r * Math.sin(rad) - 18}px;`;
    div.innerHTML = `<svg viewBox="0 0 24 24">${n.svg}</svg>`;
    wrap.appendChild(div);
  });
}

/* ── WORK CAROUSEL ── */
/* ══════════════════════════════════════════════
   SELECTED WORK CAROUSEL — driven by WORKS data
   ══════════════════════════════════════════════ */
(function () {
  const track  = document.getElementById('work-track');
  const dotsEl = document.getElementById('work-dots');
  const countEl = document.querySelector('.wf-count span');
  if (!track || typeof WORKS === 'undefined') return;

  /* ── pick featured projects (in order) ── */
  const featured = WORKS.filter(w => w.featured);

  /* ── update count ── */
  if (countEl) countEl.textContent = String(featured.length).padStart(2, '0');

  /* ── build cards ── */
  track.innerHTML = featured.map((w, i) => {
    const thumb = w.img
      ? `<img src="${w.img}" alt="${w.title}" class="thumb-img" loading="lazy">`
      : `<div class="proj-bg" style="background:${w.thumb
          ? `<img src="${w.thumb}" alt="${w.title}" style="width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0;">`
          : `<div class="proj-bg" style="background:${w.bg};"></div>`
        }"></div>`;

    const tagsHTML = (w.tags || [])
      .slice(0, 4)
      .map(t => `<span class="gp-tag">${t}</span>`)
      .join('');

    return `
      <div class="proj-card" data-index="${i}" onclick="openModal(${w.id})">
        <div class="proj-thumb">
          ${thumb}
          <div class="proj-watermark">${String(i + 1).padStart(2, '0')}</div>
          <div class="proj-cat-pill">${w.subtitle || w.l2}</div>
          <div class="proj-overlay">
            <div class="glass-panel">
              <div class="gp-top">
                <div class="gp-title">${w.title}</div>
                <div class="gp-arrow">↗</div>
              </div>
              <div class="gp-desc">${w.desc}</div>
              <div class="gp-tags">${tagsHTML}</div>
            </div>
          </div>
        </div>
        <div class="proj-info">
          <div class="pi-left">
            <div class="pi-num">${String(i + 1).padStart(2, '0')} / ${String(featured.length).padStart(2, '0')}</div>
            <div class="pi-name">${w.title}</div>
            <div class="pi-cat">${w.subtitle || ''}</div>
          </div>
          <div class="pi-right">↗</div>
        </div>
      </div>`;
  }).join('');

  /* ── dots ── */
  const cards = track.querySelectorAll('.proj-card');
  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'pd' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => scrollToCard(i));
    dotsEl.appendChild(d);
  });

  function updateDots(i) {
    document.querySelectorAll('#work-dots .pd')
      .forEach((d, j) => d.classList.toggle('active', j === i));
  }

  function scrollToCard(i) {
    cards[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }

  let currentIdx = 0;
  let autoInterval;
  let isPaused   = false;

  /* ── intersection observer (update dots + currentIdx) ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.55) {
        currentIdx = +e.target.dataset.index;
        updateDots(currentIdx);
      }
    });
  }, { root: track, threshold: 0.55 });
  cards.forEach(c => io.observe(c));

  /* ── AUTO-PLAY ── */
  function startAuto() {
    autoInterval = setInterval(() => {
      if (isPaused) return;
      currentIdx = (currentIdx + 1) % cards.length;
      scrollToCard(currentIdx);
    }, 3200);
  }
  /* ── only auto-play when #work section is visible ── */
const workSection = document.getElementById('work');
if (workSection) {
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        startAuto();
      } else {
        clearInterval(autoInterval);
      }
    });
  }, { threshold: 0.2 });
  sectionObs.observe(workSection);
}

  /* ── PAUSE on hover + scale up ── */
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      isPaused = true;
      card.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1)';
      card.style.transform  = 'scale(1.025)';
      document.body.classList.add('hovering');
    });
    card.addEventListener('mouseleave', () => {
      isPaused = false;
      card.style.transform = 'scale(1)';
      document.body.classList.remove('hovering');
    });
  });

  /* ── ARROWS ── */
  document.getElementById('btnPrev')?.addEventListener('click', () => {
    isPaused = true;
    currentIdx = Math.max(0, currentIdx - 1);
    scrollToCard(currentIdx);
    setTimeout(() => isPaused = false, 2000);
  });
  document.getElementById('btnNext')?.addEventListener('click', () => {
    isPaused = true;
    currentIdx = Math.min(cards.length - 1, currentIdx + 1);
    scrollToCard(currentIdx);
    setTimeout(() => isPaused = false, 2000);
  });

  /* ── DRAG scroll ── */
  let isDown = false, startX, scrollL;
  track.addEventListener('mousedown',  e => { isDown = true;  startX = e.pageX - track.offsetLeft; scrollL = track.scrollLeft; isPaused = true; });
  track.addEventListener('mouseleave', () => { isDown = false; isPaused = false; });
  track.addEventListener('mouseup',    () => { isDown = false; setTimeout(() => isPaused = false, 1500); });
  track.addEventListener('mousemove',  e => {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollL - (e.pageX - track.offsetLeft - startX);
  });

  /* ── KEYBOARD ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { currentIdx = Math.min(cards.length-1, currentIdx+1); scrollToCard(currentIdx); }
    if (e.key === 'ArrowLeft')  { currentIdx = Math.max(0, currentIdx-1);              scrollToCard(currentIdx); }
  });

})();

// ── ABOUT STATS CURSOR ──
document.querySelectorAll('.stat-row').forEach(row => {
  const color = getComputedStyle(row).getPropertyValue('--s-color').trim();
  row.addEventListener('mouseenter', () => {
    const ring = document.getElementById('cursor-ring');
    const cur  = document.getElementById('cursor');
    if (ring) { ring.style.borderColor = color; ring.style.width = '48px'; ring.style.height = '48px'; }
    if (cur)  { cur.style.background = color; cur.style.width = '10px'; cur.style.height = '10px'; }
  });
  row.addEventListener('mouseleave', () => {
    const ring = document.getElementById('cursor-ring');
    const cur  = document.getElementById('cursor');
    if (ring) { ring.style.borderColor = 'rgba(47,125,225,.35)'; ring.style.width = '36px'; ring.style.height = '36px'; }
    if (cur)  { cur.style.background = 'var(--accent)'; cur.style.width = '8px'; cur.style.height = '8px'; }
  });
});