// LOGIN/REGISTER MODAL
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (!overlay || !closeBtn || !loginTab || !registerTab || !loginForm || !registerForm) {
    setTimeout(initModal, 50);
    return;
  }

  document.body.addEventListener('click', function(e) {
    if (e.target.matches('#login-button') || e.target.matches('#loginBtn')) {
      showModal('login');
    }
    if (e.target.matches('#register-link')) {
      showModal('register');
    }
    if (e.target.matches('#login-link')) {
      showModal('login');
    }
  });

  function showModal(type) {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (type === 'login') {
      loginTab.classList.add('active');
      registerTab.classList.remove('active');
      loginForm.style.display = '';
      registerForm.style.display = 'none';
    } else {
      loginTab.classList.remove('active');
      registerTab.classList.add('active');
      loginForm.style.display = 'none';
      registerForm.style.display = '';
    }
  }

  function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  loginTab.addEventListener('click', () => showModal('login'));
  registerTab.addEventListener('click', () => showModal('register'));

  document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
}

document.addEventListener('DOMContentLoaded', initModal);

// NEWS MODAL
function initNewsModal() {
  const overlay = document.getElementById('news-modal-overlay');
  const closeBtn = document.getElementById('news-modal-close');
  const img = document.getElementById('news-modal-img');
  const title = document.getElementById('news-modal-title');
  const desc = document.getElementById('news-modal-desc');

  if (!overlay || !closeBtn || !img || !title || !desc) {
    setTimeout(initNewsModal, 50);
    return;
  }

  window.openNewsModal = function({ img: imgUrl, title: t, desc: d }) {
    img.src = imgUrl;
    title.textContent = t;
    desc.textContent = d;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
}

document.addEventListener('DOMContentLoaded', initNewsModal);