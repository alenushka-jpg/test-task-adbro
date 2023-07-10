const modal = document.getElementById('form-popup');
const closeButton = modal.querySelector('.adbro-modal__close');
const infoButton = document.querySelector('.adbro-thuyenxua__info');

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}

closeButton.addEventListener('click', closeModal);
infoButton.addEventListener('click', openModal);