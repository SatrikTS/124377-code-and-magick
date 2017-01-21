'use strict';


window.renderStatistics = function (ctx, names, times) {
  //Прозрачное полотно
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

  //Белое полотно
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(260, 20);
  ctx.lineTo(420, 10);
  ctx.lineTo(410, 135)
  ctx.lineTo(420, 270);
  ctx.lineTo(260, 260);
  ctx.lineTo(100, 270);
  ctx.lineTo(110, 135);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.fill('nonzero');

  //Надпись на полотне
  ctx.fillStyle = "#000";
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Иван', 'Сергей', 'Вы'], [20.32, 40.11, 30.18]);
