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

let currentSlide = 0;
const slidesToShow = 4;
const slider = document.querySelector('.adbro-slider__list');
const slideElement = slider.querySelector('.adbro-slider__item');
const marginRight = parseFloat(getComputedStyle(slideElement).marginRight);
const slideWidth = slideElement.offsetWidth + marginRight;
const nextButton = document.querySelector('.adbro-slider__arrow--next');
const prevButton = document.querySelector('.adbro-slider__arrow--prev');

nextButton.addEventListener('click', () => {
  currentSlide = Math.min(currentSlide + 1, slider.childElementCount - slidesToShow);
  slider.scrollLeft = currentSlide * slideWidth;
});

prevButton.addEventListener('click', () => {
  currentSlide = Math.max(currentSlide - 1, 0);
  slider.scrollLeft = currentSlide * slideWidth;
});
