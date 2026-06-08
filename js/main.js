// Everything Tools — main.js

function filterTools(query) {
  const cards = document.querySelectorAll('.tool-card');
  const q = query.trim().toLowerCase();
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').toLowerCase();
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
    card.classList.toggle('hidden', !(!q || tags.includes(q) || name.includes(q) || desc.includes(q)));
  });
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied';
    setTimeout(() => btn.textContent = orig, 1800);
  });
}

function downloadFile(content, filename, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
