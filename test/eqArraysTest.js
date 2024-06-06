// Test Code for eqArrays()

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE:
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 4], [1, 2, 3])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], "[1, 2, 3]")); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//TEST CASES using the assertEqual().
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], "[1, 2, 3]"), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
