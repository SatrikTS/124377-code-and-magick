'use strict';
// Открытие и закрытие всплывающего окна;
var setupOpen = document.querySelector('.setup-open');
var showSetup = document.querySelector('.setup ');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  showSetup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  showSetup.classList.add('invisible');
});

// Изменение цвета куртки у волшебника;
var wizardCoat = document.querySelector('#wizard-coat');
var changeColorCoat = function () {
  var colorCoatArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return colorCoatArr[Math.floor(Math.random() * colorCoatArr.length)];
};

wizardCoat.addEventListener('click', function () {
  this.style.fill = changeColorCoat();
});

// Изменение цвета глаз
var wizardEyes = document.querySelector('#wizard-eyes');
var changeColorEyes = function () {
  var colorEyesArr = ['black', 'red', 'blue', 'yellow', 'green'];
  return colorEyesArr[Math.floor(Math.random() * colorEyesArr.length)];
};

wizardEyes.addEventListener('click', function () {
  this.style.fill = changeColorEyes();
});

// Изменение цвета файерболла
var fireballColor = document.querySelector('.setup-fireball-wrap');
var changeColorFireball = function () {
  var colorFireballArr = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  return colorFireballArr[Math.floor(Math.random() * colorFireballArr.length)];
};

fireballColor.addEventListener('click', function () {
  this.style.background = changeColorFireball();
});
