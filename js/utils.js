'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 500;

  var lastTimeout;

  window.utils = {
    getRandomItem: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    onEscPress: function (evt, callback) {
      if (evt.keyCode === ESC_KEYCODE) {
        callback();
      }
    },

    onEnterPress: function (evt, callback) {
      if (evt.keyCode === ENTER_KEYCODE) {
        callback();
      }
    },

    debounce: function (callback) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(callback, DEBOUNCE_INTERVAL);
    }
  };
})();

