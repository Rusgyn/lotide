// Test Code for assertArraysEqual()

const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE:
assertArraysEqual([1, 2, 3], [1, 2, 3]); //✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 4], [1, 2, 3]); //🛑🛑🛑 Assertion Failed: 1,2,4 !== 1,2,3
assertArraysEqual([1, 2, 3], [3, 2, 1]); //🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,2,1
assertArraysEqual([1, 2, 3], "[1, 2, 3]"); //🛑🛑🛑 Assertion Failed: 1,2,3 !== [1, 2, 3]
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //🛑🛑🛑 Assertion Failed: 1,2,3 !== 1,2,3
assertArraysEqual([], []); //✅✅✅ Assertion Passed
assertArraysEqual("", ""); //Please provide an array argument/s