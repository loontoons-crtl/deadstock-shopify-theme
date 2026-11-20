// Deadstock Theme JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Mobile search toggle or quick filter if needed
  const searchInput = document.querySelector('.search-form input');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.parentElement.style.borderColor = 'var(--color-forest)';
    });
    searchInput.addEventListener('blur', () => {
      searchInput.parentElement.style.borderColor = 'var(--color-line)';
    });
  }
});
