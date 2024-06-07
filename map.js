// HELPER FUNCTION: Function that takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');

// HELPER FUNCTION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = require('./assertArraysEqual');

/**
 * Map function will take two arguments. An array to map, and a callback function
 * return new array based on the results of the callback function
 */

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  // Iterate each elements in the given array using for...of
  for (let item of array) {
    // The output of our callback function will push to our variable results
    results.push(callback(item));
  }

  return results; // The results will return a new array based on the results of our callback function.
};

module.exports = map;