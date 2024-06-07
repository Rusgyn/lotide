// Test code for flatten().

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", function() {
  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const firstFlat = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(firstFlat), [1, 2, 3, 4, 5, 6]);
  });

  it("should return [1, 2, [3, 4]] for [1, [2, [3, 4]]]", () => {
    const secondFlat = [1, [2, [3, 4]]];
    assert.deepEqual(flatten(secondFlat), [1, 2, [3, 4]]);
  });

  it("should return [] for []", () => {
    const thirdFlat = [];
    assert.deepEqual(flatten(thirdFlat), []);
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] for [[1, 2], [3, 4], [5, 6],[7, 8, 9], [10, 11, 12]]", () => {
    const fourthFlat = [[1, 2], [3, 4], [5, 6],[7, 8, 9], [10, 11, 12]];
    assert.deepEqual(flatten(fourthFlat), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("should return ['apple', 'banana', 'carrot'] for [['apple', 'banana'], 'carrot']", () => {
    const fifthFlat = [['apple', 'banana'], 'carrot'];
    assert.deepEqual(flatten(fifthFlat), ['apple', 'banana', 'carrot']);
  });

});