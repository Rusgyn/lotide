// Imported function that takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');

// Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log("Both arguments must be array");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

module.exports = assertArraysEqual;