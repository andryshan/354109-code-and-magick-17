'use strict';
(function () {
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
    setFillToElementOfMage(window.getRandomItem(window.constants.COAT_COLORS), setupWizardCoat, inputColorCoat);
  };

  var onEyesClick = function () {
    setFillToElementOfMage(window.getRandomItem(window.constants.EYES_COLORS), setupWizardEyes, inputColorEyes);
  };

  var onFireballClick = function () {
    setColorToElementOfMage(window.getRandomItem(window.constants.FIREBALL_COLORS), setupWizardFireball, inputColorFireball);
  };

  setupWizardCoat.addEventListener('click', onCoatClick);

  setupWizardEyes.addEventListener('click', onEyesClick);

  setupWizardFireball.addEventListener('click', onFireballClick);
})();

