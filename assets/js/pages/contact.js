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