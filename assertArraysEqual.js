/*
Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
*/

// FUNCTION IMPLEMENTATION: Function that takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let [index, element] of arr1.entries()) {
    if (element !== arr2[index]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    console.log("Please provide an array argument/s");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

// TEST CODE:
assertArraysEqual([1, 2, 3], [1, 2, 3]); //✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 4], [1, 2, 3]); //🛑🛑🛑 Assertion Failed: 1,2,4 !== 1,2,3
assertArraysEqual([1, 2, 3], [3, 2, 1]); //🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,2,1
assertArraysEqual([1, 2, 3], "[1, 2, 3]"); //🛑🛑🛑 Assertion Failed: 1,2,3 !== [1, 2, 3]
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //✅✅✅ Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //🛑🛑🛑 Assertion Failed: 1,2,3 !== 1,2,3
assertArraysEqual([], []); //✅✅✅ Assertion Passed
assertArraysEqual("", ""); //Please provide an array argument/s