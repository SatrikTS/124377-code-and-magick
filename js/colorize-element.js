'use strict';
window.colorizeElement = (function () {
  return function (element, colors, property) {
    var CODE_ENTER_KEY = 13;
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
})();
