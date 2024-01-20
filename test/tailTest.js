//test/tailTest.js

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test cases
describe("#tail", function() {
  it("should return 2 and passed for the array length of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it("should return 2 and passed for the array [1, 2, 3]", () => {
    const test = tail([1, 2, 3]);
    assert.deepEqual(test[0], 2);
  });

  it("should return 3 and passed for the array length of ['Yo Yo', 'Lighthouse', 'Labs', 'Cohort'];", () => {
    const words = tail(["Yo Yo", "Lighthouse", "Labs", "Cohort"]);
    assert.deepEqual(words.length, 3);
  });

  it("should return an empty or 0 when an array has one element only", () => {
    assert.deepEqual(tail(["test"]).length, 0);
  });

  it("should return an empty or 0 when an array is empty", () => {
    assert.deepEqual(tail([]).length, 0);
  });

});