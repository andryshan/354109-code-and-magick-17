'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

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

    xhrSetup: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json'; // Распаршиваем в JSON (Нормальный js обьект)

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response); // ответ
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      return xhr;
    }
  };
})();

