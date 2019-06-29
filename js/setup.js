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

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var compareNames = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.addWizardsToSimilarList(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = compareNames(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var lastTimeOut;

  var onCoatClick = function () {
    var newColor = window.utils.getRandomItem(COAT_COLORS);
    setFillToElementOfMage(newColor, setupWizardCoat, inputColorCoat);
    coatColor = newColor;
    if (lastTimeOut) {
      window.clearTimeout(lastTimeOut);
    }
    lastTimeOut = window.setTimeout(function () {
      updateWizards();
    }, 500);
  };

  var onEyesClick = function () {
    var newColor = window.utils.getRandomItem(EYES_COLORS);
    setFillToElementOfMage(newColor, setupWizardEyes, inputColorEyes);
    eyesColor = newColor;
    if (lastTimeOut) {
      window.clearTimeout(lastTimeOut);
    }
    lastTimeOut = window.setTimeout(function () {
      updateWizards();
    }, 500);
  };

  var onFireballClick = function () {
    setColorToElementOfMage(window.utils.getRandomItem(FIREBALL_COLORS), setupWizardFireball, inputColorFireball);
  };

  setupWizardCoat.addEventListener('click', onCoatClick);

  setupWizardEyes.addEventListener('click', onEyesClick);

  setupWizardFireball.addEventListener('click', onFireballClick);


  var renderWizards = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(renderWizards, window.showError);


  var form = document.querySelector('.setup-wizard-form');

  var closeSuccessfulForm = function () {
    setup.classList.add('hidden');
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closeSuccessfulForm, window.showError);
  };

  form.addEventListener('submit', onFormSubmit);
})();

