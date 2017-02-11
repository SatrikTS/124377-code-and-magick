'use strict';

window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var CurrentColor = null;
    element.style[property] = window.utils.getRandomElementExcept(colors, CurrentColor);
  });
  element.addEventListener('keydown', function () {
    var CurrentColor = null;
    element.style[property] = window.utils.getRandomElementExcept(colors, CurrentColor);
  });
};
