// Test case for assertEqualTest

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

//TEST CODE
describe("#assertEqual", function() {
  it("should return passed when two given arguments matched", () => {
    assert.strictEqual(assertEqual(1, 1)); // => ✅✅✅ Assertion Passed: 1 === 1
  });

  it("should return failed when two given arguments do not matched", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  }) // => 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp

});