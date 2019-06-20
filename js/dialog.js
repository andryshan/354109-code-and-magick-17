'use strict';
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

var artifactsImages = document.querySelectorAll('.setup-artifacts-cell img');

// изолирующая функция, чтобы не было потери окружения и могли брать несколько артефактов
var addDragAndDropListener = function (artifact) {
  artifact.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startСoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startСoordinates.x - moveEvt.clientX,
        y: startСoordinates.y - moveEvt.clientY
      };

      startСoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      artifact.style.top = (artifact.offsetTop - shift.y) + 'px';
      artifact.style.left = (artifact.offsetLeft - shift.x) + 'px';
      artifact.style.position = 'absolute';
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

for (var i = 0; i < artifactsImages.length; i++) {
  var artifact = artifactsImages[i];
  addDragAndDropListener(artifact);
}

