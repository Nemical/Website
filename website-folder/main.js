//navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  // Dynamically determine the path to components/navbar.html
  function getNavbarPath() {
    // Find the path from the current page to the project root
    const path = window.location.pathname;
    // Count how many folders deep we are from the root
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