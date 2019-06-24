'use strict';
(function () {
  var xhrSetup = function (onLoad, onError) {
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
  };

  window.backend = {
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = xhrSetup(onLoad, onError);

      xhr.open('POST', URL);
      xhr.send(data);
    },

    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = xhrSetup(onLoad, onError);

      xhr.open('GET', URL);
      xhr.send();
    }
  };
})();

