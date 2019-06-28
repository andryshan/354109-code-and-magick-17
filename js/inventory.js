'use strict';
(function () {
  var artifactHandler = document.querySelectorAll('.setup-artifacts-cell img');

  // изолирующая функция, чтобы не было потери окружения и могли брать несколько артефактов
  var onInventoryItemClick = function (artifact) {
    artifact.addEventListener('mousedown', function (evt) {
      evt.preventDefault();
      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        artifact.style.top = (artifact.offsetTop - shift.y) + 'px';
        artifact.style.left = (artifact.offsetLeft - shift.x) + 'px';
        artifact.style.position = 'absolute';
        artifact.style.zIndex = '1';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };

  for (var i = 0; i < artifactHandler.length; i++) {
    var artifact = artifactHandler[i];
    onInventoryItemClick(artifact);
  }
})();

