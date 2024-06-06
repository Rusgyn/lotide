// Test Code for middle()

const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays'); // assertArraysEqual() dependency
const middle = require('../middle');

//TEST CASE:
const numbers = [20, 21, 30, 31, 40, 41];
assertArraysEqual(middle(numbers), [30, 31]); // => ✅✅✅ Assertion Passed: 30,31 === 30,31

const num = [15, 16, 17, 55, 53, 57, 8, 9, 10, 17, 101, 52, 12, 45, 25];
assertArraysEqual(middle(num), [9]);// => ✅✅✅ Assertion Passed: 9 === 9

const num1 = [1];
assertArraysEqual(middle(num1), []);// => ✅✅✅ Assertion Passed:  === 

const num2 = [1, 2];
assertArraysEqual(middle(num2), []);// => ✅✅✅ Assertion Passed:  === 

const words = ["apple", "banana", "carrot", "durian", "eggplant", "fig"];
assertArraysEqual(middle(words), [ 'carrot', 'durian' ]);// => ✅✅✅ Assertion Passed: carrot,durian === carrot,durian

const word = ["apple", "banana", "carrot", "durian", "eggplant"];
assertArraysEqual(middle(word), [ 'carrot']);// ✅✅✅ Assertion Passed: carrot === carrot