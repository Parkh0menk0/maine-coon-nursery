'use strict';

(function () {
  var petsList = document.querySelector('.pets__list');
  var petsTabs = document.querySelectorAll('.pets__tab');
  var petsTabContents = document.querySelectorAll('.pets__tab-content');

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -200,
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if (petsList) {
    petsList.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (evt.target.classList.contains('pets__tab')) {

        for (var i = 0; i < petsTabContents.length; i++) {
          petsTabContents[i].classList.remove('show-slider');
          petsTabs[i].classList.remove('pets__tab--active');
        }


        var idTabContent = evt.target.href.split('#')[1];
        var petsTabContentShow = document.querySelector('#' + idTabContent);

        petsTabContentShow.classList.add('show-slider');
        evt.target.classList.add('pets__tab--active');
      }
    });
  }
})();
