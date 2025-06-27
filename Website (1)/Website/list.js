// Modal functions
function openModal() {
    document.getElementById('userModal').style.display = 'flex';
    document.body.classList.add('modal-open');
    

}

function closeModal() {
    document.getElementById('userModal').style.display = 'none';
    document.body.classList.remove('modal-open');

   
}
function closePanel(){
    document.getElementById('panel-selector').style.display = 'none';
    document.body.classList.remove('panels');
}


// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('userModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Search functionality
document.querySelector('.search-button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value;
    alert('Searching for: ' + searchTerm);
});

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = document.querySelector('.search-input').value;
        alert('Searching for: ' + searchTerm);
    }
});