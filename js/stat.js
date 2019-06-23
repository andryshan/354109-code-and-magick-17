'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var PARAGRAPH_X = 125;
  var PARAGRAPH_Y = 30;
  var PARAGRAPH_GAP_Y = 20;
  var BAR_WIDTH = 40;
  var BAR_GAP_Y = 90;
  var BAR_GAP_X = 50;
  var BAR_HEIGHT_MAX = 150;
  var NAME_HEIGHT = 30;
  var TIME_HEIGHT = 20;
  var EDGE_GAP = 40;
  var BAR_HEIGHT = CLOUD_HEIGHT - NAME_HEIGHT - BAR_GAP_Y;

  var RANDOM_NUMBERS_SATURATE = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

  var getMaxElement = function (array) {
    var maxElement = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > array[0]) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

  var renderTextStats = function (ctx, text, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  var renderSquares = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var renderColorBar = function (playerName) {
    var colorBar;
    if (playerName === 'Вы') {
      colorBar = 'red';
    } else {
      colorBar = 'hsla(240, 100%, 50%, ' + window.utils.getRandomItem(RANDOM_NUMBERS_SATURATE) + ')';
    }
    return colorBar;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderSquares(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
    renderSquares(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    renderTextStats(ctx, 'Ура вы победили!', PARAGRAPH_X, PARAGRAPH_Y);
    renderTextStats(ctx, 'Список результатов:', PARAGRAPH_X, PARAGRAPH_Y + PARAGRAPH_GAP_Y);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var proportionBar = BAR_HEIGHT * parseInt(times[i], 10) / maxTime;
      var leftIndent = CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i);
      renderSquares(ctx, leftIndent, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - proportionBar, BAR_WIDTH, proportionBar, renderColorBar(names[i]));
      renderTextStats(ctx, names[i], leftIndent, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP, '#000000');
      renderTextStats(ctx, parseInt(times[i], 10), leftIndent, CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - proportionBar - TIME_HEIGHT, '#000000');
    }
  };
})();

