'use strict';

window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    var currentColor = element.style[property];
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
    console.log(element.style[property] = window.utils.getRandomElementExcept(colors, currentColor));
  });
  element.addEventListener('keydown', function () {
    var currentColor = element.style[property];
    if (isActivateEvent(event)){
      element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
      console.log(element.style[property] = window.utils.getRandomElementExcept(colors, currentColor));
    }
  });
};
