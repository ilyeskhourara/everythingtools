// ToolBoxPro — main.js

// بحث في الأدوات
function filterTools(query) {
  const cards = document.querySelectorAll('.tool-card');
  const q = query.trim().toLowerCase();
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').toLowerCase();
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
    if (!q || tags.includes(q) || name.includes(q) || desc.includes(q)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// نسخ النص للحافظة
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ تم النسخ';
    setTimeout(() => btn.textContent = orig, 1800);
  });
}

// تحميل ملف
function downloadFile(content, filename, type = 'text/plain') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
