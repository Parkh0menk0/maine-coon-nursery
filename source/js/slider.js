'use strict';

(function () {
  var MAX_TABLET_WIDTH = 1023;

  /**
   * Функция, удаляющая (добавляющая) класс slider при изменении размера экрана.
   */
  function checkWidth() {
    var windowWidth = window.innerWidth;
    var gallery = document.querySelector('.pets__gallery');
    windowWidth <= MAX_TABLET_WIDTH ? gallery.classList.add('slider') : gallery.classList.remove('slider');
  }

  window.addEventListener('resize', checkWidth);
})();
