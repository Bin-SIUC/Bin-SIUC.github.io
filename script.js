
// highlight current nav link & set year
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) a.classList.add('active');
  });
  const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
});
