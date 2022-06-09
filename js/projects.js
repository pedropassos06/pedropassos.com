const openButton = document.getElementById('project-name');
const modal_container = document.getElementById('modal-container');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', () => {
    modal_container.classList.add('show');
})

closeButton.addEventListener('click', () => {
    modal_container.classList.remove('show');
})