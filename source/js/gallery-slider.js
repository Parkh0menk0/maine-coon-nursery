'use strict';

(function () {
  var mySwiper = undefined;

  // function initSwiper() {
  //   var screenWidth = window.innerWidth;
  //   if (screenWidth < 1024 && mySwiper == undefined) {
      mySwiper = new Swiper('.swiper-container', {
        init: false,
        loop: true,
        speed: 800,
        slidesPerView: 2, // or 'auto'
        // spaceBetween: 10,
        centeredSlides: true,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 100, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows: true, // Enables slides shadows
        },
        grabCursor: true,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        // Events
        on: {
          imagesReady: function () {
            this.el.classList.remove('loading');
          }
        }
      });
  //   } else if (screenWidth > 1023 && mySwiper != undefined) {
  //     mySwiper = undefined;
  //     document.querySelector('.swiper-wrapper').removeAttr('style');
  //     document.querySelector('.swiper-slide').removeAttr('style');
  //   }
  // }

  // Инициализация плагина Swiper
  // initSwiper();

  // Инициализация плагина Swiper при изменении резрешения окна браузера
  // window.addEventListener('resize', function () {
  //   initSwiper();
  // });



  //   // var MAX_TABLET_WIDTH = 1023;
  //   // var left = 65;
  //   // var offset = 0;
  //   // var step = 0;
  //   // var galleryСontent = document.querySelector('.gallery__wrapper');
  //   // var wrapping = document.querySelector('.gallery__layout-column');
  //   // var slides = document.querySelectorAll('.gallery__item');
  //   // var insertPictures = [];
  //   // var previousBtn = document.querySelector('.pets__slider  button:first-of-type');
  //   // var nextBtn = document.querySelector('.pets__slider  button:last-of-type');

  //   // /**
  //   //  * Функция, котрая перестраивает галерею в слайдер при разрешении экрана менее 1024 пикселей.
  //   //  */
  //   // function addSlider() {
  //   //   var windowWidth = window.innerWidth;
  //   //   if (windowWidth <= MAX_TABLET_WIDTH) {
  //   //     if (wrapping) {
  //   //       while (wrapping.firstChild) {
  //   //         galleryСontent.insertBefore(wrapping.firstChild, wrapping);
  //   //       }
  //   //     }
  //   //     if (galleryСontent.contains(wrapping)) {
  //   //       galleryСontent.removeChild(wrapping);
  //   //     }
  //   //   }
  //   // }

  //   // /**
  //   //  * Функция, сдвигающая слайд влево.
  //   //  */
  //   // function shiftLeft() {
  //   //   var slides2 = document.querySelectorAll('.gallery__item');
  //   //   var offset2 = 0;
  //   //   slides2.forEach(function (item) {
  //   //     item.style.left = offset2 * 474 - 474 + 'px';
  //   //     offset2++;
  //   //   });
  //   //   slides2[0].remove();
  //   //   draw();
  //   //   // left -= 474;
  //   //   // if (left < -948) {
  //   //   //   left = 65;
  //   //   // }
  //   //   // galleryСontent.style.left = left + 'px';

  //   // }

  //   // /**
  //   //  * Функция, сдвигающая слайд вправо.
  //   //  */
  //   // function shiftRight() {
  //   //   left += 474;
  //   //   if (left > 65) {
  //   //     left = -883;
  //   //   }
  //   //   galleryСontent.style.left = left + 'px';
  //   // }

  //   // function draw() {
  //   //   var img = insertPictures[step];
  //   //   img.style.left = offset * 474 + 'px';
  //   //   galleryСontent.appendChild(img);
  //   //   if (step + 1 === insertPictures.length) {
  //   //     step = 0;
  //   //     offset = 2;
  //   //   } else {
  //   //     step++;
  //   //     offset++;
  //   //   }
  //   // }

  //   // addSlider();

  //   // window.addEventListener('resize', addSlider);

  //   // function init() {
  //   //   slides.forEach(function (item) {
  //   //     insertPictures.push(item.cloneNode(true));
  //   //     item.remove();
  //   //   });

  //   //   for (var i = 0; i < insertPictures.length; i++) {
  //   //     draw();
  //   //   }
  //   // }

  //   // init();

  //   // previousBtn.addEventListener('click', shiftLeft);
  //   // nextBtn.addEventListener('click', shiftRight);



})();
