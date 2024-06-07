// Test Code for tail()

const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test cases
describe("#tail", function() {
  it("should return the elements of the given array excluding the element at index 0", function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]); // => ["Lighthouse", "Labs"]
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("should return the elements of a given array excluding the element at index 0.", () => {
    const test = tail([1, 2, 3]); //=> [2, 3];
    assert.deepEqual(test, [2, 3]);
  });

  it("should return an empty array when the given array has one element only", () => {
    const test = tail(["one"]); // => []
    assert.deepEqual(test, []);
  });

  it("should return an empty array when the given array is empty", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should passed and return 3 as the number of length to the given array.", () => {
    const words = tail(["Yo Yo", "Lighthouse", "Labs", "Cohort"]); // => ["Lighthouse", "Labs", "Cohort"]
    assert.deepEqual(words.length, 3);
  });

});