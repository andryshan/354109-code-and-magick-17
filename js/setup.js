'use strict';
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
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupUsername = setup.querySelector('.setup-user-name');

var setupWizardCoat = setup.querySelector('.wizard-coat');
var setupWizardEyes = setup.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

var inputColorCoat = setup.querySelector('[name="coat-color"]');
var inputColorEyes = setup.querySelector('[name="eyes-color"]');
var inputColorFireball = setup.querySelector('[name="fireball-color"]');

var setColorToElementOfMage = function (colors, partOfWizard, inputOfWizard, property) {
  var randomColor = getRandomItem(colors);
  partOfWizard.style[property] = randomColor;
  inputOfWizard.setAttribute('value', randomColor);
};

var onCoatClick = function () {
  setColorToElementOfMage(COAT_COLORS, setupWizardCoat, inputColorCoat, 'fill');
};

var onEyesClick = function () {
  setColorToElementOfMage(EYES_COLORS, setupWizardEyes, inputColorEyes, 'fill');
};

var onFireballClick = function () {
  setColorToElementOfMage(FIREBALL_COLORS, setupWizardFireball, inputColorFireball, 'backgroundColor');
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
  setup.classList.remove('hidden');
  similarBlock.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  similarBlock.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

