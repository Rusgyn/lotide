// Test code for the function letterPositions

const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", function() {
  it("should return [0] for letter 'h' in words ('hi, LHL')", () => {
    const test2 = letterPositions('hi, LHL');
    assert.deepEqual(test2['h'], [0]);
  });

  it("should return [1] for letter 'i' in words ('hi, LHL')", () => {
    const test2 = letterPositions('hi, LHL');
    assert.deepEqual(test2['i'], [1]);
  });

  it("should return [2] for letter ',' in words ('hi, LHL')", () => {
    const test2 = letterPositions('hi, LHL');
    assert.deepEqual(test2[','], [2]);
  });

  it("should return [4, 6] for letter 'L' in words ('hi, LHL')", () => {
    const test2 = letterPositions('hi, LHL');
    assert.deepEqual(test2['L'], [4, 6]);
  });

  it("should return [5] for letter 'H' in words ('hi, LHL')", () => {
    const test2 = letterPositions('hi, LHL');
    assert.deepEqual(test2['H'], [5]);
  });



});