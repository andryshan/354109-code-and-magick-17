'use strict';
(function () {
  window.backend = {
    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = window.utils.xhrSetup(onLoad, onError);
      xhr.open('POST', URL);
      xhr.send(data);
    },

    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = window.utils.xhrSetup(onLoad, onError);
      xhr.open('GET', URL);
      xhr.send();
    }
  };
})();

