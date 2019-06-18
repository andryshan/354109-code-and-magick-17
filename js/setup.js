'use strict';
(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBERS = 4;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var similarBlock = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  // var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');

  var setupUsername = window.util.setup.querySelector('.setup-user-name');

  var setupWizardCoat = window.util.setup.querySelector('.wizard-coat');
  var setupWizardEyes = window.util.setup.querySelector('.wizard-eyes');
  var setupWizardFireball = window.util.setup.querySelector('.setup-fireball-wrap');

  var inputColorCoat = window.util.setup.querySelector('[name="coat-color"]');
  var inputColorEyes = window.util.setup.querySelector('[name="eyes-color"]');
  var inputColorFireball = window.util.setup.querySelector('[name="fireball-color"]');

  var setFillToElementOfMage = function (color, partOfWizard, inputOfWizard) {
    partOfWizard.style.fill = color;
    inputOfWizard.value = color;
  };

  var setColorToElementOfMage = function (color, partOfWizard, inputOfWizard) {
    partOfWizard.style.backgroundColor = color;
    inputOfWizard.value = color;
  };

  var onCoatClick = function () {
    setFillToElementOfMage(getRandomItem(COAT_COLORS), setupWizardCoat, inputColorCoat);
  };

  var onEyesClick = function () {
    setFillToElementOfMage(getRandomItem(EYES_COLORS), setupWizardEyes, inputColorEyes);
  };

  var onFireballClick = function () {
    setColorToElementOfMage(getRandomItem(FIREBALL_COLORS), setupWizardFireball, inputColorFireball);
  };

  setupWizardCoat.addEventListener('click', onCoatClick);

  setupWizardEyes.addEventListener('click', onEyesClick);

  setupWizardFireball.addEventListener('click', onFireballClick);

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    similarBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    similarBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.util.setup.style = false;
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

  // var starHandler = document.querySelector('[alt="star"]');

  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var createWizards = function (quantity) {
    var wizards = [];
    for (var i = 0; i < quantity; i++) {
      wizards[i] = {
        name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
        coatColor: getRandomItem(COAT_COLORS),
        eyesColor: getRandomItem(EYES_COLORS)
      };
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var addWizardsToSimilarList = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  addWizardsToSimilarList(createWizards(WIZARD_NUMBERS)); // Передаем в функцию массив wizards
})();

