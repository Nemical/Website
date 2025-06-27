// Elements
const loginButton = document.querySelector('.login-button a');
const loginModal = document.getElementById('loginModal');
const loginClose = document.querySelector('.login-close');

const registerModal = document.getElementById('registerModal');
const registerLink = document.querySelector('.register-link');
const registerClose = document.querySelector('.register-close');

// Open Login Modal
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'flex';
});

// Close Login Modal
loginClose.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Open Register Modal from Login
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'none';
  registerModal.style.display = 'flex';
});

// Close Register Modal
registerClose.addEventListener('click', () => {
  registerModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === loginModal) loginModal.style.display = 'none';
  if (e.target === registerModal) registerModal.style.display = 'none';
});
