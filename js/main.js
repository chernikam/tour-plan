$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: 'fade',
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    effect: 'slide',
  });

  var menuButton = $('.menu-button');
  menuButton.on('click', function (params) {
    $('.navbar-button').toggleClass('navbar-button--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});
