'use strict';

window.utils = {
  getRandomElement: function (someArray) {
    return someArray[Math.floor(Math.random() * someArray.length)];
  },
  getRandomElementExcept: function (someArray, someElement) {
    var currentNum = null;
    while (!currentNum || currentNum === someElement) {
      currentNum = this.getRandomElement(someArray);
    }
    return currentNum;
  }
};
