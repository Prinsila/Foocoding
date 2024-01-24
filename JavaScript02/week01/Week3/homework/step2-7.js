'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// In this function, the parameter 'val' is a primitive type (number).
// The value of 'x' is passed to the function, but the function only modifies
// the local variable 'val' and does not affect the original 'x' outside the function.
