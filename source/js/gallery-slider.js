'use strict';

(function () {
  var MAX_TABLET_WIDTH = 1023;

  var galleryСontent = document.querySelector('.gallery__wrapper');
  var wrapping = document.querySelector('.gallery__layout-column');

  /**
   * Функция, котрая перестраивает галерею в слайдер при разрешении экрана менее 1024 пикселей.
   */
  function addSlider() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= MAX_TABLET_WIDTH) {
      if (wrapping) {
        while (wrapping.firstChild) {
          galleryСontent.insertBefore(wrapping.firstChild, wrapping);
        }
      }
      if (galleryСontent.contains(wrapping)) {
        galleryСontent.removeChild(wrapping);
      }
    }
  }

  addSlider();

  window.addEventListener('resize', addSlider);



  //   var sliderWidth = document.querySelector('.slider').offsetWidth;

  //   var line = document.querySelector('.line');
  //   var slides = document.querySelectorAll('.slide');
  //   var previousBtn = document.querySelector('.slider__control--left');
  //   var nextBtn = document.querySelector('.slider__control--right');

  //   var widthArray = [];
  //   var lineWidth = 0;
  //   var offset = 0;
  //   var step = 0;
  //   var balance = 0;

  /**
   * Функция, сдвигающая слайд влево.
   */
  // function shiftLeft() {
  //   balance = lineWidth - sliderWidth - (offset + widthArray[step]);
  //   if (balance >= 0) {
  //     offset += widthArray[step];
  //     line.style.left = -offset + 'px';
  //   } else {
  //     line.style.left = -(lineWidth - sliderWidth) + 'px';
  //     offset = 0;
  //     step = -1;
  //   }

  //   if (step + 1 == slides.length) {
  //     step = 0;
  //     offset = 0;
  //   } else {
  //     step++;
  //   }
  // }

  /**
   * Функция, сдвигающая слайд вправо.
   */
  // function shiftRight() {
  //   balance = lineWidth - sliderWidth - (offset + widthArray[step]);
  //   if (balance >= 0) {
  //     offset += widthArray[step];
  //     line.style.left = offset + 'px';
  //   } else {
  //     line.style.left = lineWidth - sliderWidth + 'px';
  //     offset = 0;
  //     step = -1;
  //   }

  //   if (step + 1 == slides.length) {
  //     step = 0;
  //     offset = 0;
  //   } else {
  //     step++;
  //   }
  // }

  // slides.forEach(function (item) {
  //   widthArray.push(item.offsetWidth);
  //   lineWidth += item.offsetWidth;
  // });

  // line.style.width = lineWidth + 'px';

  // previousBtn.addEventListener('click', shiftLeft);
  // nextBtn.addEventListener('click', shiftRight);
})();
