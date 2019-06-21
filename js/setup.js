'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DIALOG_SETUP_Y = '80px';
  var DIALOG_SETUP_X = '50%';

  var similarBlock = document.querySelector('.setup-similar');
  var setup = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var setupUsername = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
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
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var onUsernameFocus = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onUsernameBlur = function () {
    document.addEventListener('keydown', onPopupEscPress);
  };

  setupUsername.addEventListener('focus', onUsernameFocus);

  setupUsername.addEventListener('blur', onUsernameBlur);
})();

