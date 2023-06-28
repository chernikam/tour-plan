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

  var body = $('body');
  body.on('keydown', function (e) {
    var code = e.keyCode;
    if (code == 27) closeModal(e);
  });

  $('.modal__form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        name: 'required',
        phone: {
          required: true,
          minlength: 11,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Please specify your name',
        },
        phone: {
          required: 'We need your phone to contact you',
          minlength: 'Your phone number must be at least 11 digits long',
        },
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    });
  });
});
