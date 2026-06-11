// ── STORY TABS ──
function showStory(id, el) {
  document.querySelectorAll('.story-block').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.index-item').forEach(i => i.classList.remove('active'));
  document.getElementById('story-' + id).classList.add('active');
  el.classList.add('active');
}