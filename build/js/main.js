'use strict';

(function () {
  var question = document.querySelectorAll('.faq__question');
  var i;

  if (question) {
    for (i = 0; i < question.length; i++) {
      question[i].addEventListener('click', function () {
        this.classList.toggle('active-btn');
        this.nextElementSibling.classList.toggle('faq__answer--show');
      });
    }
  }
})();

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
    clearInterval(slideInterval);
  });
  previous.addEventListener('click', function () {
    previousSlide();
    clearInterval(slideInterval);
  });

})();
