// Test case for middle function.

const eqArrays = require('../eqArrays'); // The function eqArrays checks if two arrays have the same elements in the same order.
const assertArraysEqual = require('../assertArraysEqual'); // uses eqArrays to check if two arrays are equal and prints a message to the console.
const assert = require('chai').assert;
const middle = require('../middle');
const assertEqual = require('../assertEqual');

//Test cases. To test using assertArraysEqual() if the return middle of the array element has passed or failed.

describe("#middle", function() {
  it("should return an empty array and passed when there's only single element in the given array", () => {
    assert.deepEqual(assertArraysEqual(middle([1]), []));
  }); // => ✅✅✅ Assertion Passed:  === 

  it("should return an empty array and passed when there's only two elements in the given array", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2]), []));
  }) // => ✅✅✅ Assertion Passed:  === 

  it("should return [2] and passed for [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  }); // => ✅✅✅ Assertion Passed: 2 === 2

  it("should return [3] and passed for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
  }); // => ✅✅✅ Assertion Passed: 3 === 3

  it("should return [2, 3] and passed for [1, 2, 3, 4]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
  }); // => ✅✅✅ Assertion Passed: 2,3 === 2,3

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  }); // => ✅✅✅ Assertion Passed: 3,4 === 3,4

  it("should return ['d'] for ['a', 'b', 'c', 'd', 'e', 'f', 'g']", () => {
    assert.deepEqual(assertArraysEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]));
  }); // => ✅✅✅ Assertion Passed: d === d

  it("should return ['banana', 'carrot'] for ['apple', 'banana', 'carrot', 'durian']", () => {
    assert.deepEqual(assertArraysEqual(middle(["apple", "banana", "carrot", "durian"]), ["banana", "carrot"]));
  }); // => ✅✅✅ Assertion Passed: banana,carrot === banana,carrot

});