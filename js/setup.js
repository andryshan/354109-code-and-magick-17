'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: [
      WIZARD_NAMES, WIZARD_SURNAMES
    ],
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: [
      WIZARD_NAMES, WIZARD_SURNAMES
    ],
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: [
      WIZARD_NAMES, WIZARD_SURNAMES
    ],
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  },
  {
    name: [
      WIZARD_NAMES, WIZARD_SURNAMES
    ],
    coatColor: COAT_COLORS,
    eyesColor: EYES_COLORS
  }
];

var getRandomIndexOfArray = function (array) {
  return Math.floor(Math.random() * array.length);
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name[0][getRandomIndexOfArray(WIZARD_NAMES)] + ' ' + wizard.name[1][getRandomIndexOfArray(WIZARD_SURNAMES)];
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor[getRandomIndexOfArray(COAT_COLORS)];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor[getRandomIndexOfArray(EYES_COLORS)];
  return wizardElement;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createFragment();

document.querySelector('.setup-similar').classList.remove('hidden');
