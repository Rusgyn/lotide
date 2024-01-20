// Test for function eqArrays.

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CASE

assertEqual(eqArrays([], []), true); // => true, Passed
assertEqual(eqArrays(["1", "2", "3"], []), false); // => false, Passed
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true, Passed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false, Passed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true, Passed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false, Passed