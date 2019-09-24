'use strict';

(function () {

  var slides = document.querySelectorAll('.team__item');
  var next = document.querySelector('.team__slider button:first-of-type');
  var previous = document.querySelector('.team__slider button:last-of-type');
  var currentSlide = 0;

  var slideInterval = setInterval(nextSlide,2000);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'team__item';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'team__item team__item-show';
  }

  next.addEventListener('click', function () {
    nextSlide();
  });
  previous.addEventListener('click', function () {
    previousSlide();
  });

})();
