//test/tailTest.js

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test cases
describe("#tail", function() {
  it("should return 2 and passed for the array length of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
    assert.strictEqual(assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2));
  }); // => ✅✅✅ Assertion Passed: 2 === 2

  it("should return 2 and passed for the array [1, 2, 3]", () => {
    const test = tail([1, 2, 3]);
    assert.strictEqual(test[0], 2);
    assert.strictEqual(assertEqual(test[0], 2));
  }); // => ✅✅✅ Assertion Passed: 2 === 2

  it("should return 3 and passed for the array length of ['Yo Yo', 'Lighthouse', 'Labs', 'Cohort'];", () => {
    const words = tail(["Yo Yo", "Lighthouse", "Labs", "Cohort"]);
    assert.strictEqual(words.length, 3);
    assert.strictEqual(assertEqual(words.length, 3));
  }); // => ✅✅✅ Assertion Passed: 2 === 2

  it("should return an empty or 0 when an array has one element only", () => {
    assert.strictEqual(tail(["test"]).length, 0);
    assert.strictEqual(assertEqual(tail(["test"]).length, 0));
  }); // => ✅✅✅ Assertion Passed: 0 === 0

  it("should return an empty or 0 when an array is empty", () => {
    assert.strictEqual(tail([]).length, 0);
    assert.strictEqual(assertEqual(tail([]).length, 0));
  }); // => ✅✅✅ Assertion Passed: 0 === 0

});