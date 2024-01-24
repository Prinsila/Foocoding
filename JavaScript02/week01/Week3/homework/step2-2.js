'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);

    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i);
      fiveCallback(i);
    }
    else if (i % 3 === 0) {
      threeCallback(i);
    }
    else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  const numbers = [];
  console.log(number);
}

function sayFive(number) {
  const numbers = [];
  console.log(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
