'use strict';

window.utils = (function () {
  var getRandomElement = function (someArray) {
    return someArray[Math.floor(Math.random() * someArray.length)];
  };
  var getRandomElementExcept = function (someArray, someElement) {
    var currentNum = null;
    while (!currentNum || currentNum === someElement) {
      currentNum = this.getRandomElement(someArray);
    }
    return currentNum;
  };
  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
