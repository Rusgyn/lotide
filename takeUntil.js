// HELPER FUNCTION: Function that takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = require('./eqArrays');

// HELPER FUNCTION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = require('./assertArraysEqual');

// Function that will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  
  const results = [];

  for (let element of array) {
    // Applying the callback function, when it's truthy the iteration stop.
    if (callback(element)) {
      break;
    } else {
    // The element will be pushed to new array results until the callback is called and break the iteration of each element in the array.
      results.push(element);
    }
  }

  return results;
};

module.exports = takeUntil;