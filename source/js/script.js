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
