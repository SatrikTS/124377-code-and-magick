'use strict';
// Открытие и закрытие всплывающего окна;
var setupOpen = document.querySelector('.setup-open');
var showSetup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  showSetup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  showSetup.classList.add('invisible');
});

// Изменение цвета куртки у волшебника;
var COLOR_COAT_ARR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardCoat = document.querySelector('#wizard-coat');
var randomColorCoat = function () {
  return COLOR_COAT_ARR[Math.floor(Math.random() * COLOR_COAT_ARR.length)];
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = randomColorCoat();
});

// Изменение цвета глаз
var COLOR_EYES_ARR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyes = document.querySelector('#wizard-eyes');
var randomColorEyes = function () {
  return COLOR_EYES_ARR[Math.floor(Math.random() * COLOR_EYES_ARR.length)];
};

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = randomColorEyes();
});

// Изменение цвета файерболла
var COLOR_FIREBALL_ARR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var fireballColor = document.querySelector('.setup-fireball-wrap');
var randomColorFireball = function () {
  return COLOR_FIREBALL_ARR[Math.floor(Math.random() * COLOR_FIREBALL_ARR.length)];
};

fireballColor.addEventListener('click', function () {
  fireballColor.style.background = randomColorFireball();
});
