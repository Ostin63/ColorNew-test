/* eslint-disable no-undef */
/* eslint-disable id-length */
const sliderElement = document.querySelector('.calculator__slider');
const valueElement = document.querySelector('.calculator__input--slider');

valueElement.value = 2050000;

noUiSlider.create(sliderElement, {
  range: {
    min: 100000,
    max:5000000,
  },
  start: 2050000,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  valueElement.value = unencoded[handle];
});

// Инициализация слайдера

new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.reviews__control-button--next',
    prevEl: '.reviews__control-button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1300: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});
