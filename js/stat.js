'use strict';
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
var BAR_HEIGHT = CLOUD_HEIGHT - NAME_HEIGHT - BAR_GAP_Y;
var EDGE_GAP = 40;

var RANDOM_NUMBERS_SATURATE = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[0]) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

/*
var renderBars = function (ctx, width, height, x, y) {
  ctx.fillRect(width, height, x, y);
};
*/

var renderTextStats = function (ctx, text, x, y) {
  ctx.fillText(text, x, y);
};

var makeRandomSaturate = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', PARAGRAPH_X, PARAGRAPH_Y);
  ctx.fillText('Список результатов:', PARAGRAPH_X, PARAGRAPH_Y + PARAGRAPH_GAP_Y);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsla(240, 100%, 50%, ' + makeRandomSaturate(RANDOM_NUMBERS_SATURATE) + ')';
    }
    renderCloud(ctx, CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - ((BAR_HEIGHT * parseInt(times[i], 10)) / maxTime), BAR_WIDTH, (BAR_HEIGHT * parseInt(times[i], 10)) / maxTime);
    ctx.fillStyle = '#000000';
    renderTextStats(ctx, names[i], CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);
    renderTextStats(ctx, parseInt(times[i], 10), CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - ((BAR_HEIGHT * parseInt(times[i], 10)) / maxTime) - TIME_HEIGHT);
    /*
    var proportionBar = BAR_HEIGHT * parseInt(times[i], 10) / maxTime;
    renderBars(ctx, CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - proportionBar, BAR_WIDTH, proportionBar);
    ctx.fillStyle = '#000000';
    renderTextStats(ctx, names[i], CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);
    renderTextStats(ctx, parseInt(times[i], 10), CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT - proportionBar - TIME_HEIGHT);
    */
  }
};
