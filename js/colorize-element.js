'use strict'
var CurrentColor = null;
window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function() {
    element.style[property] = window.utils.getRandomElementExcept(colors, CurrentColor);
  });
};


var testElement = document.querySelector('#wizard-coat');
var somecolors = ['red', 'orange', 'blue'];


/*console.log(testElement);
console.log(somecolors);
console.log(window.utils.getRandomElementExcept(somecolors, CurrentColor));
console.log(colorizeElement(testElement, somecolors, fill));*/
