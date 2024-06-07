// Test Code for head()

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns the first element of an array. 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns the element of an array with one element as its head, '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns the first element of an array, 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });

  it('returns the first element of an array, "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });

});