/* ── PAGE JS: contact ── */

function copyEmail() {
  navigator.clipboard.writeText('ahmed.mostafa@example.com').then(() => {
    const btn  = document.getElementById('copyBtn');
    const icon = document.getElementById('copyIcon');
    const txt  = document.getElementById('copyText');

    btn.classList.add('copied');
    icon.textContent = '✓';
    txt.textContent  = 'Copied!';

    setTimeout(() => {
      btn.classList.remove('copied');
      icon.textContent = '⎘';
      txt.textContent  = 'Copy Email Address';
    }, 2200);
  });
}

/* ── MAGNETIC CARDS ── */
const pcColors = {
  'pc-email': '#3d8ef5', 'pc-linkedin': '#0a66c2',
  'pc-behance': '#1769ff', 'pc-youtube': '#ff0000',
  'pc-github': '#e8eef8', 'pc-whatsapp': '#25d366'
};

document.querySelectorAll('.pm-card[data-mag]').forEach(card => {
  const strength = 28;

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'background .3s, flex .5s cubic-bezier(.4,0,.2,1)';
  });

  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const tx = (e.clientX - (r.left + r.width  / 2)) * (strength / r.width)  * 2;
    const ty = (e.clientY - (r.top  + r.height / 2)) * (strength / r.height) * 2;
    card.style.transform = `translate(${tx}px,${ty}px)`;

    const cls = [...card.classList].find(c => c.startsWith('pc-'));
    if (cls) {
      const col = pcColors[cls] || '#3d8ef5';
      const cur  = document.getElementById('cursor');
      const ring = document.getElementById('cursor-ring');
      if (cur)  { cur.style.background = col; cur.style.width = '12px'; cur.style.height = '12px'; }
      if (ring) { ring.style.borderColor = col; ring.style.width = '52px'; ring.style.height = '52px'; }
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1), background .3s, flex .5s cubic-bezier(.4,0,.2,1)';
    card.style.transform = 'translate(0,0)';
    setTimeout(() => card.style.transition = '', 500);
    const cur  = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (cur)  { cur.style.background = 'var(--accent)'; cur.style.width = '8px'; cur.style.height = '8px'; }
    if (ring) { ring.style.borderColor = 'rgba(61,142,245,.35)'; ring.style.width = '36px'; ring.style.height = '36px'; }
  });
});