'use strict';
(function () {
  // var WIZARD_NUMBERS = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  window.addWizardsToSimilarList = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > 4 ? 4 : wizards.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(window.utils.getRandomItem(wizards)));
    }
    similarListElement.appendChild(fragment);
  };

  // window.backend.load(addWizardsToSimilarList, window.showError);
})();
