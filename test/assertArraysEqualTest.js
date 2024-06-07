// Test Code for assertArraysEqual()

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", function() {

  it("should passed for two match arrays, ([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => ✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
  });

  it("should failed for two given not match arguments.", () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], []));
  }); // => 🛑🛑🛑 Assertion Failed: 1,2,3 !==

  it("should passed for given string of matched arrays", () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  }); // => ✅✅✅ Assertion Passed: 1,2,3 === 1,2,3

  it("should failed for not match array elements.", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  }); // => 🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,2,1

  it("should failed for given string of matched arrays", () => {
    assert.deepEqual(assertArraysEqual(["1", "banana", "3"], ["1", "Banana", "3"]));
  }); // => 🛑🛑🛑 Assertion Failed: 1,banana,3 !== 1,Banana,3

  it("should failed for two given of unmatched arrays.", () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
  }); // => 🛑🛑🛑 Assertion Failed: 1,2,3 !== 1,2,3

  it("should pop up an alert message if arguments neither/either array.", () => {
    assert.strictEqual(assertArraysEqual("","")); //Both arguments must be array
  });

});