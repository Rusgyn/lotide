// Function that takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = require('./eqArrays');

// Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = require('./assertArraysEqual');

//FUNCTION IMPLEMENTATION: Function that will return a subset of a given array, removing unwanted elements.
// The without function takes two arrays as arguments: 'source' and 'itemsToRemove'.
// It returns a new array which is a copy of 'source', but with any elements that are present in 'itemsToRemove' removed.

const without = function(source, itemsToRemove) {

  let itemsRemained = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      itemsRemained.push(source[i]);
    }
  }

  return itemsRemained;
};

module.exports = without;