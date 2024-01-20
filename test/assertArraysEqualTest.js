// Test case for assertArraysEqual function

const assertArraysEqual = require('../assertArraysEqual');

// Test cases

assertArraysEqual([], []); // => Passed
assertArraysEqual(["1", "2", "3"], []); // => Failed
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Failed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Failed