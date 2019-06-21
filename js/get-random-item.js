'use strict';
(function () {
  window.getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
})();

