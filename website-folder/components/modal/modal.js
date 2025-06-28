// Wait until the modal is loaded into the DOM before initializing
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // If modal elements are not yet present, try again shortly
  if (!overlay || !closeBtn || !loginTab || !registerTab || !loginForm || !registerForm) {
    setTimeout(initModal, 50);
    return;
  }

  // Open modal on navbar login/register click
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

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
}

// Wait for DOMContentLoaded, then initialize modal logic
document.addEventListener('DOMContentLoaded', initModal);