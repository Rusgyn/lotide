// Test Code for assertEqual()

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", function() {

  it("should return assertion passed when given two identical arguments in number.", () => {
    const actual = 1;
    const expected = 1;
    assert.strictEqual(assertEqual(actual, expected)); // => ✅✅✅ Assertion Passed: 1 === 1
  });

  it("should return assertion passed when given two identical arguments in strings.", () => {
    const actual = "lighthouse labs";
    const expected = "lighthouse labs";
    assert.strictEqual(assertEqual(actual, expected)); // => ✅✅✅ Assertion Passed: lighthouse labs === lighthouse labs
  });

  it("should return assertion passed when given different decimal precision.", () => {
    const actual = 5.5;
    const expected = 5.50;
    assert.strictEqual(assertEqual(actual, expected)); // => ✅✅✅ Assertion Passed: 5.5 === 5.50
  });

  it("should return assertion passed when given identical negative number as arguments", () => {
    const actual = -3;
    const expected = -3;
    assert.strictEqual(assertEqual(actual, expected)); // => ✅✅✅ Assertion Passed: -3 === -3
  });

  it("should return assertion failed when given two identical arguments but different case.", () => {
    const actual = "Lighthouse Labs";
    const expected = "lighthouse labs";
    assert.strictEqual(assertEqual(actual, expected)); // => 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== lighthouse labs
  });

  it("should return assertion failed when given two difference arguments in strings.", () => {
    const actual = "Lighthouse Labs";
    const expected = "Bootcamp";
    assert.strictEqual(assertEqual(actual, expected)); // => 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
  });

  it("should return assertion failed when given two difference arguments in string and in number.", () => {
    const actual = 10;
    const expected = "10";
    assert.strictEqual(assertEqual(actual, expected)); // => 🛑🛑🛑 Assertion Failed: 10 !== 10
  });

  it("should return assertion failed when given positive and negative integers", () => {
    const actual = 2;
    const expected = -2;
    assert.strictEqual(assertEqual(actual, expected)); // => 🛑🛑🛑 Assertion Failed: 2 !== -2
  });

  it("should return assertion failed when given different decimal values", () => {
    const actual = 1.1;
    const expected = 1.01;
    assert.strictEqual(assertEqual(actual, expected)); // => 🛑🛑🛑 Assertion Failed: 1.1 !== 1.01
  });

});