'use strict';

(function () {

  var slides = document.querySelectorAll('.reviews__item');
  var next = document.querySelector('.reviews__slider button:first-of-type');
  var previous = document.querySelector('.reviews__slider button:last-of-type');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,2000);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'reviews__item';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'reviews__item reviews__item-show';
  }

  next.addEventListener('click', function () {
    nextSlide();
    clearInterval(slideInterval);
  });
  previous.addEventListener('click', function () {
    previousSlide();
    clearInterval(slideInterval);
  });

})();
