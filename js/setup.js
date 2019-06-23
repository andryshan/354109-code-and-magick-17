'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBERS = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var setup = document.querySelector('.setup');

  var setupWizardCoat = setup.querySelector('.wizard-coat');
  var setupWizardEyes = setup.querySelector('.wizard-eyes');
  var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

  var inputColorCoat = setup.querySelector('[name="coat-color"]');
  var inputColorEyes = setup.querySelector('[name="eyes-color"]');
  var inputColorFireball = setup.querySelector('[name="fireball-color"]');

  var setFillToElementOfMage = function (color, partOfWizard, inputOfWizard) {
    partOfWizard.style.fill = color;
    inputOfWizard.value = color;
  };

  var setColorToElementOfMage = function (color, partOfWizard, inputOfWizard) {
    partOfWizard.style.backgroundColor = color;
    inputOfWizard.value = color;
  };

  var onCoatClick = function () {
    setFillToElementOfMage(window.utils.getRandomItem(COAT_COLORS), setupWizardCoat, inputColorCoat);
  };

  var onEyesClick = function () {
    setFillToElementOfMage(window.utils.getRandomItem(EYES_COLORS), setupWizardEyes, inputColorEyes);
  };

  var onFireballClick = function () {
    setColorToElementOfMage(window.utils.getRandomItem(FIREBALL_COLORS), setupWizardFireball, inputColorFireball);
  };

  setupWizardCoat.addEventListener('click', onCoatClick);

  setupWizardEyes.addEventListener('click', onEyesClick);

  setupWizardFireball.addEventListener('click', onFireballClick);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var successLoadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_NUMBERS; i++) {
      fragment.appendChild(renderWizard(window.utils.getRandomItem(wizards)));
    }
    similarListElement.appendChild(fragment);
  };

  var errorMessageHandler = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successLoadHandler, errorMessageHandler);

  var form = document.querySelector('.setup-wizard-form');

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.dialog.closePopup, errorMessageHandler);
  };

  form.addEventListener('submit', onFormSubmit);
})();

