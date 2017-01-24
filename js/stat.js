'use strict';

var drawCloud = function (ctx, x, y, width, height) {
  var offset = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width / 2, y + offset);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width - offset, y + height / 2);
  ctx.lineTo(x + width, y + height);
  ctx.lineTo(x + width / 2, y + height - offset);
  ctx.lineTo(x, y + height);
  ctx.lineTo(x + offset, y + height / 2);
  ctx.closePath();
  ctx.fill();
};

function getRandom() {
  return Math.floor(Math.random() * 256).toFixed(0);
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  drawCloud(ctx, 100, 10, 420, 270);

  //  Надпись на полотне
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  var HISTO_HEIGHT = 140;
  var HISTO_WIDTH = 40;
  var HISTO_X = 140;
  var step = HISTO_HEIGHT / max;
  var columnIndent = HISTO_WIDTH + 50;
  var OFFSET_Y = 100;

  for (var j = 0; j < times.length; j++) {
    var name = names[j];
    var time = times[j];
    var height = step * time;
    var histoY = HISTO_HEIGHT - height + OFFSET_Y;

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), HISTO_X + columnIndent * j, histoY - 20);
    ctx.fillText(name, HISTO_X + columnIndent * j, OFFSET_Y + HISTO_HEIGHT + 5);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,' + getRandom() + ',' + 0.2 * (j + 1) + ')';
    }
    ctx.fillRect(HISTO_X + columnIndent * j, histoY, HISTO_WIDTH, height);
  }
};
