'use strict';
(function () {
  var setup = document.querySelector('.setup');

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
    window.renderWizard.addToList(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = compareNames(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.wizard.onCoatChange = window.utils.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onEyesChange = window.utils.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

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

