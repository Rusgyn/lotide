// Test Code for middle()

const assertArraysEqual = require('../assertArraysEqual');// uses eqArrays to check if two arrays are equal
const eqArrays = require('../eqArrays'); // assertArraysEqual() dependency
const middle = require('../middle');
const assert = require('chai').assert;

//TEST CASE:
describe("#middle", function() {
  it("should return an empty array and passed when there's only single element in the given array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return an empty array and passed when there's only two elements in the given array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [2] and passed for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] and passed for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2, 3] and passed for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return ['d'] for ['a', 'b', 'c', 'd', 'e', 'f', 'g']", () => {
    assert.deepEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]);
  });

  it("should return ['banana', 'carrot'] for ['apple', 'banana', 'carrot', 'durian']", () => {
    assert.deepEqual(middle(["apple", "banana", "carrot", "durian"]), ["banana", "carrot"]);
  });

});
