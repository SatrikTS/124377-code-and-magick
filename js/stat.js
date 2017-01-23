'use strict';


window.renderStatistics = function (ctx, names, times) {
  //  Прозрачное полотно
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(270, 30);
  ctx.lineTo(430, 20);
  ctx.lineTo(420, 135);
  ctx.lineTo(430, 280);
  ctx.lineTo(270, 270);
  ctx.lineTo(110, 280);
  ctx.lineTo(120, 135);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();

  //  Белое полотно
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(260, 20);
  ctx.lineTo(420, 10);
  ctx.lineTo(410, 135);
  ctx.lineTo(420, 270);
  ctx.lineTo(260, 260);
  ctx.lineTo(100, 270);
  ctx.lineTo(110, 135);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.fill('nonzero');

  //  Надпись на полотне
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 140;
  var histoWidth = 40;
  var histoX = 110;
  var step = histoHeight / max;
  var columnIndent = histoWidth + 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;
    var histoY = histoHeight - height + 100;

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, histoY - 20);
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 5);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,' + Math.floor(Math.random() * 256).toFixed(0) + ',' + 0.2 * (i + 1) + ')';
    }
    ctx.fillRect(histoX + columnIndent * i, histoY, histoWidth, height);
  }
};
