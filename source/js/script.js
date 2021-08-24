/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable id-length */
const sliderElement = document.querySelector('.calculator__slider');
const valueElementRange = document.querySelector('.calculator__input--slider');
const valueElementPay = document.querySelector('.calculator__input--pay');

const navButton = document.querySelector('.header__button-nav');
const modalNav = document.querySelector('.header__nav-wrapper');
const navClose = modalNav.querySelector('.header__nav-close');
const topButton = modalNav.querySelector('.header__top-button');
const headerNavLinks = modalNav.querySelectorAll('.header__nav-item-link');

const options = document.querySelector('.options__wrapper');
const optionsNavs = options.querySelectorAll('.options__nav-item');
const optionsCarts = options.querySelectorAll('.options__cart');

const optionsMenuArrows = options.querySelectorAll('.options__cart-open');
const optionsMenus = options.querySelectorAll('.options__menu');
const optionsMenuItems = options.querySelectorAll('.options__menu-item');

//меню навигации

const onAddModalNav = () => {
  modalNav.classList.add('active');
};

const onRemoveModalNav = () => {
  modalNav.classList.remove('active');
};

const checkWidth = () => {
  if (window.innerWidth >= 1440) {
    onRemoveModalNav();
  }
};

for (let link of headerNavLinks) {
  link.addEventListener('click', onRemoveModalNav);
}

navButton.addEventListener('click', onAddModalNav);
navClose.addEventListener('click', onRemoveModalNav);
topButton.addEventListener('click', onRemoveModalNav);
window.addEventListener('resize', checkWidth);

const switchSlides = (switchers, slides) => {
  for (let i = 0; i < switchers.length; i++) {
    switchers[i].addEventListener('click', () => {

      for (let i = 0; i < switchers.length; i++) {
        switchers[i].classList.remove('active');
        slides[i].classList.remove('active');
      }

      switchers[i].classList.add('active');
      slides[i].classList.add('active');
    });
  }
};

// Переключатель карточек

switchSlides(optionsNavs, optionsCarts);

//открытие меню

for (let i = 0; i < optionsMenuArrows.length; i++) {
  optionsMenuArrows[i].addEventListener('click', () => {
    optionsMenuArrows[i].classList.toggle('active');
    optionsMenus[i].classList.toggle('show');
  });

  for (let j = 0; j < optionsMenuItems.length; j++) {

    optionsMenuItems[j].addEventListener('click', (event) => {
      event.preventDefault();
      for (let j = 0; j < optionsMenuItems.length; j++) {

        optionsMenuItems[j].classList.remove('active');
      }
      optionsMenuItems[j].classList.add('active');
      optionsMenuArrows[i].classList.remove('active');
      optionsMenus[i].classList.remove('show');
    });
  }
}

// Калькулятор

valueElementRange.value = 2050000;

noUiSlider.create(sliderElement, {
  range: {
    min: 100000,
    max: 5000000,
  },
  start: 2050000,
  step: 50000,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  valueElementRange.value = Math.round(unencoded[handle]);

  const valueRange = Number(valueElementRange.value);

  if (valueRange < 249000) {
    valueElementPay.value = 12;
  } else if (valueRange < 449000) {
    valueElementPay.value = 14;
  } else if (valueRange < 1000000) {
    valueElementPay.value = 16;
  } else {
    valueElementPay.value = 18;
  }
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
