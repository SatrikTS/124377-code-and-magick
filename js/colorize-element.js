'use strict';
var CODE_ENTER_KEY = 13;
window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var currentColor = element.style[property];
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  });
  element.addEventListener('keydown', function () {
    var currentColor = element.style[property];
    if (event.keyCode === CODE_ENTER_KEY) {
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    }
  });
};
