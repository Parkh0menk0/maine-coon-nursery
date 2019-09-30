'use strict';
(function () {
  var swiperElements = document.querySelectorAll('.slider-js');

  if (!swiperElements.length) {
    return;
  }

  var initSlider = function () {

    for (var i = 0; i < swiperElements.length; i++) {
      // eslint-disable-next-line
      var swiper = new window.Swiper(swiperElements[i], {
        observeParents: true,
        observer: true,
        slidesPerView: 'auto',
        spaceBetween: 200,
        effect: 'slide',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpointsInverse: true,
      });
    }
  };

  initSlider();
})();
