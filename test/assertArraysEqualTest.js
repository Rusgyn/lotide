//Test case for assertArraysEqual function.

const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual", function() {
  it("should passed for two match arrays. ([], [])", () => {
    assert.strictEqual(assertArraysEqual([], []));
  }); // => ✅✅✅ Assertion Passed:  === 

  it("should failed for two given arguments when not match.", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], []));
  }); // => 🛑🛑🛑 Assertion Failed: 1,2,3 !== 

  it("should passed for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  }); // => ✅✅✅ Assertion Passed: 1,2,3 === 1,2,3

  it("should failed for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  }); // => 🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,2,1

  it("should passed for given string of matched arrays", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  }); // => ✅✅✅ Assertion Passed: 1,2,3 === 1,2,3

  it("should failed for two given of unmatched arrays.", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
  }) // => 🛑🛑🛑 Assertion Failed: 1,2,3 !== 1,2,3

})