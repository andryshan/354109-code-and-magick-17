'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP_Y = 90;
var BAR_GAP_X = 50;

var NAME_HEIGHT = 30;
var barHeiht = CLOUD_HEIGHT - NAME_HEIGHT - BAR_GAP_Y;

var EDGE_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText('Ура вы победили!', 125, 30);
  ctx.fillText('Список результатов:', 125, 50);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 0), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Вы', 140, 255);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 1), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Кекс', 230, 255);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 2), CLOUD_Y + BAR_GAP_Y, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Катя', 320, 255);

  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.fillRect(CLOUD_X + EDGE_GAP + ((BAR_WIDTH + BAR_GAP_X) * 3), 100, BAR_WIDTH, barHeiht);

  ctx.fillStyle = '#000000';
  ctx.fillText('Игорь', 410, 255);
};
