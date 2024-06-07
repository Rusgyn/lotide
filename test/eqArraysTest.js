// Test Code for eqArrays()

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE:
describe("#eqArrays", function() {
  it("should return true and passed for [], []", () => {
    assert.strictEqual(assertEqual(eqArrays([], []), true));
  }); // => ✅✅✅ Assertion Passed: true === true

  it("should return false and passed for ['1', '2', '3'], []", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], []), false));
  }); // => ✅✅✅ Assertion Passed: false === false

  it("should return true and passed for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  }); // => ✅✅✅ Assertion Passed: true === true

  it("should return false and passed for [1, 2, 3], [3, 2, 1", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  }); // => ✅✅✅ Assertion Passed: false === false

  it("should return true and passed for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
  }); // => ✅✅✅ Assertion Passed: true === true

  it("should return false and passed for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
  }); // => ✅✅✅ Assertion Passed: false === false

});