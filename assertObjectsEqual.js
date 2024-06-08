//Compare two objects, return true if it matches else false.
const eqObjects = require('./eqObjects');

// Function that will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {

  //built-in library function that is intended for debugging and returns a string representation of the object
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;