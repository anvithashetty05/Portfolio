document.addEventListener('DOMContentLoaded', function () {
    function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      const page = document.getElementById(id);
      if (!page) return;
      page.classList.add('active');
      page.style.animation = 'none';
      page.offsetHeight;
      page.style.animation = '';
      const navLink = document.getElementById('nav-' + id);
      if (navLink) navLink.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        showPage(this.getAttribute('data-page'));
      });
    });
  });