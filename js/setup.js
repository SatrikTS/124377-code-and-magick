'use strict';
// Открытие и закрытие всплывающего окна;
var setupOpen = document.querySelector('.setup-open img');
var setupDialog = document.querySelector('.setup');
var setupClose = setupDialog.querySelector('.setup-close');
var setupSubmitDialog = document.querySelector('.setup-submit');
var CODE_ENTER_KEY = 13;
var CODE_ESC_KEY = 27;

var isActivateEvent = function (event) {
  return event.keyCode && event.keyCode === CODE_ENTER_KEY;
};

var setupKeydownHandler = function (event) {
  if (event.keyCode === CODE_ESC_KEY) {
    closeDialog();
  }
};

var showDialog = function () {
  setupDialog.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var closeDialog = function () {
  setupDialog.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

// Открытие и закрытие диалогового окна по клику
setupOpen.addEventListener('click', function () {
  showDialog();
  handleBtnClick(event);
});

setupClose.addEventListener('click', function () {
  closeDialog();
  handleBtnClick(event);
});

// Открытие и закрытие диалогового окна по событиям клавиатуры
setupOpen.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    showDialog();
    handleBtnKeyPress(event);
  }
});

setupClose.addEventListener('keydown', function (event) {
  if (isActivateEvent(event)) {
    closeDialog();
    handleBtnKeyPress(event);
  }
});

setupSubmitDialog.addEventListener('click', function (event) {
  event.preventDefault();
  closeDialog();
  handleBtnClick(event);
});

setupSubmitDialog.addEventListener('keydown', function (event) {
  event.preventDefault();
  if (isActivateEvent(event)) {
    closeDialog();
    handleBtnKeyPress(event);
  }
});

// Обновление атрибута aria-pressed
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyPress(event) {
  if (isActivateEvent(event)) {
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  element.setAttribute('aria-pressed', !pressed);
}

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardCoat = document.querySelector('#wizard-coat');
var fireballColor = document.querySelector('.setup-fireball-wrap');

wizardEyes.setAttribute('tabindex', '0');
wizardCoat.setAttribute('tabindex', '0');
fireballColor.setAttribute('tabindex', '0');

window.colorizeElement(wizardEyes, ['black', 'red', 'blue', 'yellow', 'green'], 'fill');
window.colorizeElement(wizardCoat, ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], 'fill');
window.colorizeElement(fireballColor, ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'], 'background');
