// Test case for middle function.

const eqArrays = require('../eqArrays'); // The function eqArrays checks if two arrays have the same elements in the same order.
const assertArraysEqual = require('../assertArraysEqual'); // uses eqArrays to check if two arrays are equal and prints a message to the console.
const middle = require('../middle');

//Test cases

//to test the middle().

middle([1]); // => []
middle([1, 2]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle(["a", "b", "c", "d", "e", "f", "g"]); // => ["d"]
middle(["apple", "banana", "carrot", "durian"]); // => ["banana", "carrot"]

//to test using assertArraysEqual() if the return middle of the array element/s has passed or failed.

assertArraysEqual(middle([1]), []); // => Passed
assertArraysEqual(middle([1, 2]), []); // => Passed
assertArraysEqual(middle([1, 2, 3]), [2]); // => Passed
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => Passed
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => Passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => Passed
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]); // => Passed
assertArraysEqual(middle(["apple", "banana", "carrot", "durian"]), ["banana", "carrot"]); // => Passed