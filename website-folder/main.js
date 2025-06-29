document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  function getNavbarPath() {
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length - 1;
    let prefix = '';
    for (let i = 0; i < depth; i++) {
      prefix += '../';
    }
    return prefix + 'components/navbar/navbar.html';
  }

  fetch(getNavbarPath())
    .then(res => {
      if (!res.ok) throw new Error('Navbar not found');
      return res.text();
    })
    .then(html => {
      navbar.innerHTML = html;
    })
    .catch(err => {
      navbar.innerHTML = '<div style="color:red;">Navbar failed to load.</div>';
      console.error(err);
    });
});