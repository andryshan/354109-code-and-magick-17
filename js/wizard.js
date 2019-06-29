'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  var colorOfPartWizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  var onCoatClick = function () {
    var newColor = window.utils.getRandomItem(COAT_COLORS);
    setFillToElementOfMage(newColor, setupWizardCoat, inputColorCoat);
    colorOfPartWizard.onCoatChange(newColor);
  };

  var onEyesClick = function () {
    var newColor = window.utils.getRandomItem(EYES_COLORS);
    setFillToElementOfMage(newColor, setupWizardEyes, inputColorEyes);
    colorOfPartWizard.onEyesChange(newColor);
  };

  var onFireballClick = function () {
    setColorToElementOfMage(window.utils.getRandomItem(FIREBALL_COLORS), setupWizardFireball, inputColorFireball);
  };

  setupWizardCoat.addEventListener('click', onCoatClick);

  setupWizardEyes.addEventListener('click', onEyesClick);

  setupWizardFireball.addEventListener('click', onFireballClick);

  window.wizard = colorOfPartWizard;
})();

