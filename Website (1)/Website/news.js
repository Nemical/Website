document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    const modal = document.getElementById('announcementModal');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.querySelector('body');
    
    // Event listener for each news card
    newsCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent;
        const content = card.querySelector('p').textContent;
  
        // Set the content of the modal
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalContent').textContent = content;
  
        // Show the modal
        modal.style.display = 'flex';
        body.classList.add('modal-open');  // Add blur effect on the background
      });
    });
  
    // Event listener for the close button
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      body.classList.remove('modal-open');  // Remove blur effect
    });
  
    // Close modal if clicking outside of the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
      }
    });
  });
  