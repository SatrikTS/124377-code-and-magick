'use strict';

window.utils = {
  getRandomElement: function (someArray) {
    return someArray[Math.floor(Math.random() * someArray.length)];
  },
  getRandomElementExcept: function (someArray, someElement) {
    var currentNum = null; // изначальное состояние элемента
    while (!currentNum || currentNum === someElement) {  // пока состояние элемента будет совпадать со значение элемента на входе
      currentNum = this.getRandomElement(someArray); // будем записывать в него новые значения
    }
    return currentNum; // Новое состояние элемента
  }
};
