/* Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

// This function checks if two arrays have the same elements in the same order.

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// This function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arrayToFlat) {

  //let flatArray = [].concat.apply([], flats); 

  let flattenedArray = [].concat(...arrayToFlat); //the Spread syntax (...) allows the concatenation operation to be performed on all the elements of the array and stores the result in an empty array thus giving us a flattened array.

  return flattenedArray;
};

module.exports = flatten;