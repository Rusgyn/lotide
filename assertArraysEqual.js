// A function which will take in two arrays and console.log an appropriate message to the console.

const eqArrays = require("./eqArrays"); //  A function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

module.exports = assertArraysEqual;