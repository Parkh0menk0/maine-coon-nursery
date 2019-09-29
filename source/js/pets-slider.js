'use strict';
(function () {
  var swipers = [];
  var swiperElements = document.querySelectorAll('.pets__slider');
  if (!swiperElements.length) {
    return;
  }

  var createSlider = function () {
    swipers = [];

    for (var i = 0; i < swiperElements.length; i++) {
      var swiper = new window.Swiper(swiperElements[i], {
        observeParents: true,
        observer: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 'auto',
        spaceBetween: -100,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        loopedSlides: 3,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -100,
          }
        },
        breakpointsInverse: true,
      });

      swipers.push(swiper);
    }
  };


  var createMobileSlider = function () {
    swipers = [];

    for (var i = 0; i < swiperElements.length; i++) {
      var swiper = new window.Swiper(swiperElements[i], {
        observeParents: true,
        speed: 300,
        observer: true,
        centeredSlides: true,
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        loopedSlides: 3,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: -100,
          }
        },
        breakpointsInverse: true,
      });

      swipers.push(swiper);
    }
  };

  var initSlider = function () {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (!swipers.length) {
        createSlider();
      }
    } else {
      if (swipers.length) {
        for (var i = 0; i < swiperElements.length; i++) {
          swipers[i].destroy(true, true);
        }

        swipers = [];
      }
    }
  };


  initSlider();
  window.addEventListener('resize', initSlider);
})();
