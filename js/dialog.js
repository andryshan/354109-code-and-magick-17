'use strict';
(function () {
  var DIALOG_SETUP_Y = '80px';
  var DIALOG_SETUP_X = '50%';

  var similarBlock = document.querySelector('.setup-similar');
  var setup = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUsername = setup.querySelector('.setup-user-name');

  var uploadImageBlock = document.querySelector('.upload');

  var onPopupEscPress = function (evt) {
    window.utils.onEscPress(evt, closePopup);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    similarBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    similarBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.left = DIALOG_SETUP_X;
    setup.style.top = DIALOG_SETUP_Y;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.onEnterPress(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utils.onEnterPress(evt, closePopup);
  });

  var onUsernameFocus = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onUsernameBlur = function () {
    document.addEventListener('keydown', onPopupEscPress);
  };

  setupUsername.addEventListener('focus', onUsernameFocus);

  setupUsername.addEventListener('blur', onUsernameBlur);

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

