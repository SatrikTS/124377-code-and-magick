'use strict'
window.utils = {
  getRandomElement: function (someArray) {
    return someArray[Math.floor(Math.random()*someArray.length)];
  },
  getRandomElementExcept: function (someArray, someElement) {
    var randomElement = null;
    do {
      randomElement = this.getRandomElement(someArray);
    } while (randomElement === someElement);
    return randomElement;
  }
};

/* Для проверки роботоспособности
var randomArray = [1, 3, 6, 7, 44, 55, 33, 77];
console.log(utils.getRandomElement(randomArray));
console.log(utils.getRandomElementExcept(randomArray, 1));
*/
