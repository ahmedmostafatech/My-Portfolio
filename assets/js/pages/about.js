// ── STORY TABS ──
function showStory(id, el) {
  document.querySelectorAll('.story-block').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
  document.getElementById('story-' + id).classList.add('active');
  if (el) el.classList.add('active');

  const valuesNav = document.getElementById('valuesNav');
  if (valuesNav) {
    valuesNav.style.display = id === 'values' ? 'block' : 'none';
  }
}

// ── VALUES NAV DOTS — يشتغل دايماً على الـ window scroll ──
const valuesRows = document.getElementById('valuesRows');
if (valuesRows) {
  valuesRows.addEventListener('scroll', () => {
    const navItems = document.querySelectorAll('.snav-item');
    const idx = Math.round(valuesRows.scrollLeft / valuesRows.clientWidth);
    navItems.forEach((n, j) => n.classList.toggle('active', j === idx));
  });
}

// ── DOT CLICK ──
document.addEventListener('click', e => {
  const item = e.target.closest('.snav-item');
  if (!item) return;
  const i = +item.dataset.target;
  const rows = document.querySelectorAll('.vrow');
  if (rows[i]) rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// ── CURSOR COLOR PER ROW ──
document.querySelectorAll('.vrow').forEach((row, i) => {
  const rowColors = ['#7ab4ff', '#f0f4fc', '#22c55e', '#a259ff'];
  row.addEventListener('mouseenter', () => {
    const ring = document.getElementById('cursor-ring');
    const cur  = document.getElementById('cursor');
    if (ring) ring.style.borderColor = rowColors[i];
    if (cur)  { cur.style.background = rowColors[i]; cur.style.width = '10px'; cur.style.height = '10px'; }
  });
  row.addEventListener('mouseleave', () => {
    const ring = document.getElementById('cursor-ring');
    const cur  = document.getElementById('cursor');
    if (ring) ring.style.borderColor = 'rgba(47,125,225,.35)';
    if (cur)  { cur.style.background = 'var(--accent)'; cur.style.width = '8px'; cur.style.height = '8px'; }
  });
});

// ── SK CARDS: 3D TILT + SHINE ──
document.querySelectorAll('.sk-card').forEach(card => {
  const tilt  = card.querySelector('.sk-tilt');
  const shine = card.querySelector('.sk-shine');
  const ring  = document.getElementById('cursor-ring');
  const cur   = document.getElementById('cursor');

  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - .5;
    const y = (e.clientY - r.top)  / r.height - .5;
    tilt.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
    shine.style.setProperty('--mx', `${(x + .5) * 100}%`);
    shine.style.setProperty('--my', `${(y + .5) * 100}%`);
    if (cur)  { cur.style.width = '12px'; cur.style.height = '12px'; }
    if (ring) { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = getComputedStyle(card).getPropertyValue('--card-c'); }
  });

  card.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateY(0) rotateX(0) scale3d(1,1,1)';
    if (cur)  { cur.style.width = '8px'; cur.style.height = '8px'; }
    if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(47,125,225,.3)'; }
  });
});

// ── MATRIX RAIN ──
const mc = document.getElementById('matrixCanvas');
if (mc) {
  const ctx   = mc.getContext('2d');
  mc.width    = mc.offsetWidth;
  mc.height   = mc.offsetHeight;
  const chars = '0110101001110100101001110'.split('');
  const cols  = Math.floor(mc.width / 14);
  const drops = Array(cols).fill(1);
  setInterval(() => {
    ctx.fillStyle = 'rgba(0,10,0,.08)'; ctx.fillRect(0, 0, mc.width, mc.height);
    ctx.fillStyle = '#00cc44'; ctx.font = '12px monospace';
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, y * 14);
      if (y * 14 > mc.height && Math.random() > .97) drops[i] = 0;
      drops[i]++;
    });
  }, 60);
}

// ── TF NODE NETWORK ──
const tc = document.getElementById('tfCanvas');
if (tc) {
  const ctx   = tc.getContext('2d');
  tc.width    = tc.offsetWidth;
  tc.height   = tc.offsetHeight;
  const nodes = Array.from({ length: 16 }, () => ({
    x: Math.random() * tc.width,  y: Math.random() * tc.height,
    vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4
  }));
  (function drawTF() {
    ctx.clearRect(0, 0, tc.width, tc.height);
    nodes.forEach((a, i) => nodes.forEach((b, j) => {
      if (i >= j) return;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 90) {
        ctx.strokeStyle = `rgba(255,111,0,${.35 * (1 - d / 90)})`;
        ctx.lineWidth = .8; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }));
    nodes.forEach(n => {
      ctx.fillStyle = 'rgba(255,111,0,.6)'; ctx.beginPath(); ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2); ctx.fill();
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > tc.width)  n.vx *= -1;
      if (n.y < 0 || n.y > tc.height) n.vy *= -1;
    });
    requestAnimationFrame(drawTF);
  })();
}

// ── NLP FLOATING WORDS ──
const nlpWrap = document.getElementById('nlpWords');
if (nlpWrap) {
  const words = ['BERT','TOKENIZE','ARABIC','SENTIMENT','TRANSFORMER','EMBEDDING','ATTENTION','NLP','CLASSIFY','CORPUS','DIALECT','VECTOR'];
  words.forEach(w => {
    const el  = document.createElement('div');
    el.className = 'nlp-word';
    const dur = 18 + Math.random() * 10;
    const top = 5  + Math.random() * 80;
    el.style.cssText = `top:${top}%;font-size:${11 + Math.random() * 8}px;animation-duration:${dur}s;animation-delay:${-Math.random() * dur}s;`;
    el.textContent = w + '  ·  ' + w + '  ·  ' + w + '  ·  ' + w + '  ·  ';
    nlpWrap.appendChild(el);
  });
}