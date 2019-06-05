'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP_Y = 90;
var BAR_GAP_X = 50;

var BAR_HEIGHT_MAX = 150;
var NAME_HEIGHT = 30;
var TIME_HEIGHT = 20;
var barHeiht = CLOUD_HEIGHT - NAME_HEIGHT - BAR_GAP_Y;

var EDGE_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/* var renderFont = function (ctx, color, font, baseline) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseline;
}; */

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  // renderFont(ctx, '#000000', '16px PT Mono', 'hanging');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', 125, 30);
  ctx.fillText('Список результатов:', 125, 50);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + barHeiht - ((barHeiht * parseInt(times[i], 10)) / maxTime), BAR_WIDTH, (barHeiht * parseInt(times[i], 10)) / maxTime);
    ctx.fillText(names[i], CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);
    ctx.fillText(parseInt(times[i], 10), CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * i), CLOUD_Y + BAR_GAP_Y + barHeiht - ((barHeiht * parseInt(times[i], 10)) / maxTime) - TIME_HEIGHT);
  }

  /*
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 0), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Вы', CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 0), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 1), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Кекс', CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 1), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 2), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Катя', CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 2), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 3), 100, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Игорь', CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 3), CLOUD_Y + BAR_GAP_Y + BAR_HEIGHT_MAX + CLOUD_GAP); */
};
