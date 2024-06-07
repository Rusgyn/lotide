// Function that takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = require('./eqArrays');

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

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // => ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
assertObjectsEqual({ a: 10, b: 2 }, { b: 2, a: '1' }); // => 🛑🛑🛑 Assertion Failed: { a: 10, b: 2 } !== { b: 2, a: '1' }
assertObjectsEqual({ a: 'one', b: 2 }, { b: 2, a: 'one' }); // => ✅✅✅ Assertion Passed: { a: 'one', b: 2 } === { b: 2, a: 'one' }
assertObjectsEqual({ a: '1', b: '2' }, { b: 2, a: 1 }); // => 🛑🛑🛑 Assertion Failed: { a: '1', b: '2' } !== { b: 2, a: 1 }