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
