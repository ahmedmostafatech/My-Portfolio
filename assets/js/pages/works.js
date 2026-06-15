const WORKS = [

  /* ══ CREATIVE → BRANDING ══ */
  {
    id: 1, l1: 'creative', l2: 'branding',
    num: '01', wide: true,
    title: 'اسم المشروع هنا',
    subtitle: 'Brand Identity',
    desc: 'وصف قصير بيظهر على الكارد',
    tags: ['Logo', 'Brand System', 'Guidelines'],
    bg: '#0f1628', label: 'PROJ',
    // ── بيانات الـ modal ──
    year: '2024',
    role: 'Brand Designer',
    client: 'اسم العميل',
    fullDesc: 'وصف تفصيلي للمشروع — اكتب هنا كل حاجة عايز تقولها عن المشروع، التحديات، الحلول، النتايج.',
    images: [
      'assets/images/projects/proj1-1.jpg',
      'assets/images/projects/proj1-2.jpg',
    ],
    link: '',   // لو في لينك خارجي
  },
  {
    id: 2, l1: 'creative', l2: 'branding',
    num: '02', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Logo & Packaging',
    desc: 'وصف قصير',
    tags: ['Logo', 'Packaging', 'Print'],
    bg: '#1a1008', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },
  {
    id: 3, l1: 'creative', l2: 'branding',
    num: '03', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Visual Identity',
    desc: 'وصف قصير',
    tags: ['Brand', 'Type', 'Color'],
    bg: '#0a1020', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },

  /* ══ CREATIVE → SOCIAL ══ */
  {
    id: 4, l1: 'creative', l2: 'social',
    num: '01', wide: true,
    title: 'اسم المشروع',
    subtitle: 'Social Media Kit',
    desc: 'وصف قصير',
    tags: ['Instagram', 'Templates', 'Motion'],
    bg: '#1a0a1a', label: 'PROJ',
    year: '2024', role: 'Social Media Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },
  {
    id: 5, l1: 'creative', l2: 'social',
    num: '02', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Monthly Content',
    desc: 'وصف قصير',
    tags: ['Social', 'Content', 'Arabic'],
    bg: '#1a1208', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },

  /* ══ CREATIVE → YOUTUBE ══ */
  {
    id: 6, l1: 'creative', l2: 'youtube',
    num: '01', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Thumbnail System',
    desc: 'وصف قصير',
    tags: ['Thumbnails', 'YouTube', 'CTR'],
    bg: '#1a0808', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },
  {
    id: 7, l1: 'creative', l2: 'youtube',
    num: '02', wide: true,
    title: 'اسم المشروع',
    subtitle: 'Channel Branding',
    desc: 'وصف قصير',
    tags: ['Motion', 'After Effects', 'Branding'],
    bg: '#1a0e08', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },

  /* ══ CREATIVE → PRINT ══ */
  {
    id: 8, l1: 'creative', l2: 'print',
    num: '01', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Report Design',
    desc: 'وصف قصير',
    tags: ['Print', 'Layout', 'Data Viz'],
    bg: '#101a0a', label: 'PROJ',
    year: '2024', role: 'Designer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },

  /* ══ TECHNICAL → AI ══ */
  {
    id: 9, l1: 'technical', l2: 'ai',
    num: '01', wide: true,
    title: 'Object Detection System',
    subtitle: 'Computer Vision',
    desc: 'Real-time YOLOv8 detection — 94% mAP on custom dataset.',
    tags: ['PyTorch', 'YOLO', 'OpenCV'],
    bg: '#0a1520', label: 'YOLO',
    year: '2024', role: 'ML Engineer', client: 'Personal Project',
    fullDesc: 'نموذج كشف أجسام في الوقت الفعلي باستخدام YOLOv8 — تم تدريبه على داتاسيت مخصص بدقة 94% mAP. تم النشر باستخدام FastAPI.',
    images: [], link: 'https://github.com/ahmedmostafatech',
  },
  {
    id: 10, l1: 'technical', l2: 'ai',
    num: '02', wide: false,
    title: 'Arabic Sentiment NLP',
    subtitle: 'Natural Language Processing',
    desc: 'BERT-based Arabic sentiment analysis — 89% accuracy.',
    tags: ['NLP', 'BERT', 'Arabic'],
    bg: '#0a1a15', label: 'NLP',
    year: '2024', role: 'ML Engineer', client: 'Personal Project',
    fullDesc: 'نموذج تحليل المشاعر للنصوص العربية على وسائل التواصل الاجتماعي — fine-tuned BERT بدقة 89% على الداتاسيت.',
    images: [], link: '',
  },

  /* ══ TECHNICAL → WEB ══ */
  {
    id: 11, l1: 'technical', l2: 'web',
    num: '01', wide: true,
    title: 'اسم المشروع',
    subtitle: 'Web Development',
    desc: 'وصف قصير',
    tags: ['HTML', 'CSS', 'JS'],
    bg: '#0a1420', label: 'WEB',
    year: '2024', role: 'Web Developer', client: 'العميل',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },

  /* ══ TECHNICAL → NETWORKING ══ */
  {
    id: 12, l1: 'technical', l2: 'networking',
    num: '01', wide: false,
    title: 'CCNA Lab Series',
    subtitle: 'Networking Education',
    desc: 'Arabic CCNA curriculum — packet tracer labs & video explanations.',
    tags: ['CCNA', 'Networking', 'Arabic'],
    bg: '#001a14', label: 'NET',
    year: '2024', role: 'Instructor', client: 'YouTube / Students',
    fullDesc: 'سلسلة شاملة لشرح مادة CCNA باللغة العربية — تشمل labs على Packet Tracer وفيديوهات شرح مفصلة لكل module.',
    images: [], link: 'https://youtube.com/@ahmedmostafatech',
  },

  /* ══ TECHNICAL → AUTOMATION ══ */
  {
    id: 13, l1: 'technical', l2: 'automation',
    num: '01', wide: false,
    title: 'اسم المشروع',
    subtitle: 'Automation Script',
    desc: 'وصف قصير',
    tags: ['Python', 'API', 'Automation'],
    bg: '#1a1a0a', label: 'AUTO',
    year: '2024', role: 'Developer', client: 'Personal',
    fullDesc: 'وصف تفصيلي.',
    images: [], link: '',
  },
];

const L2_LABELS = {
  creative:  { branding: 'Branding', social: 'Social Media', youtube: 'YouTube', print: 'Print' },
  technical: { ai: 'AI & ML', web: 'Web Dev', networking: 'Networking', automation: 'Automation' }
};

let currentL1 = 'creative', currentL2 = 'branding', currentCols = 3;

/* ══ RENDER L2 ══ */
function renderL2() {
  const el = document.getElementById('l2-filter');
  if (!el) return;
  el.innerHTML = Object.keys(L2_LABELS[currentL1]).map(c => `
    <button class="l2-btn${c === currentL2 ? ' active' : ''}" onclick="setL2('${c}',this)">
      <span>${L2_LABELS[currentL1][c]}</span>
    </button>
  `).join('');
}

/* ══ RENDER CARDS ══ */
function renderCards() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;
  const filtered = WORKS.filter(w => w.l1 === currentL1 && w.l2 === currentL2);
  document.getElementById('count').textContent = filtered.length;
  grid.style.gridTemplateColumns = `repeat(${currentCols},1fr)`;

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty" style="display:block">Coming soon</div>';
    return;
  }

  grid.innerHTML = filtered.map((w, i) => `
    <div class="work-card${w.wide && currentCols >= 3 ? ' wide' : ''}"
         style="animation-delay:${i * 60}ms"
         onclick="openModal(${w.id})">
      <div class="card-thumb" style="background:${w.bg}">
        <div class="thumb-placeholder">${w.label}</div>
        <div class="card-cat">${w.subtitle}</div>
        <div class="card-overlay">
          <span class="overlay-link">View Project <span class="overlay-arrow">↗</span></span>
        </div>
      </div>
      <div class="card-info">
        <div class="card-num">${w.num} / ${String(filtered.length).padStart(2,'0')}</div>
        <div class="card-title">${w.title}</div>
        <div class="card-desc">${w.desc}</div>
        <div class="card-tags">${w.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

/* ══ MODAL ══ */
function openModal(id) {
  const w = WORKS.find(x => x.id === id);
  if (!w) return;

  const modal = document.getElementById('proj-modal');
  const body  = document.getElementById('modal-body');

  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-meta">
        <span class="modal-cat">${w.subtitle}</span>
        <span class="modal-year">${w.year}</span>
      </div>
      <h2 class="modal-title">${w.title}</h2>
      <div class="modal-tags">${w.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
    </div>

    <div class="modal-info-row">
      <div class="modal-info-cell">
        <div class="modal-info-label">Role</div>
        <div class="modal-info-val">${w.role}</div>
      </div>
      <div class="modal-info-cell">
        <div class="modal-info-label">Client</div>
        <div class="modal-info-val">${w.client}</div>
      </div>
      <div class="modal-info-cell">
        <div class="modal-info-label">Year</div>
        <div class="modal-info-val">${w.year}</div>
      </div>
      ${w.link ? `<div class="modal-info-cell">
        <div class="modal-info-label">Link</div>
        <a href="${w.link}" target="_blank" class="modal-link">View Live ↗</a>
      </div>` : ''}
    </div>

    <div class="modal-desc">${w.fullDesc}</div>

    ${w.images && w.images.length ? `
      <div class="modal-images">
        ${w.images.map(src => `
          <div class="modal-img-wrap">
            <img src="${src}" alt="${w.title}" loading="lazy">
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="modal-img-placeholder" style="background:${w.bg}">
        <span>${w.label}</span>
      </div>
    `}
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('proj-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ══ SETTERS ══ */
function setL1(val, btn) {
  currentL1 = val; currentL2 = Object.keys(L2_LABELS[val])[0];
  document.querySelectorAll('.l1-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderL2(); renderCards();
}
function setL2(val, btn) {
  currentL2 = val;
  document.querySelectorAll('.l2-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}
function setGrid(n, btn) {
  currentCols = n;
  document.querySelectorAll('.vtbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards();
}

renderL2();
renderCards();