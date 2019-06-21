'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var uploadImageBlock = document.querySelector('.upload');

  var onUploadInputClick = function (evt) {
    evt.preventDefault();
    var startСoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startСoordinates.x - moveEvt.clientX,
        y: startСoordinates.y - moveEvt.clientY
      };

      startСoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onUploadImageClick = function (clickEvt) {
          clickEvt.preventDefault();
          uploadImageBlock.removeEventListener('click', onUploadImageClick);
        };
        uploadImageBlock.addEventListener('click', onUploadImageClick);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  uploadImageBlock.addEventListener('mousedown', onUploadInputClick);
})();

