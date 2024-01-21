/*
Our map function will take in two arguments:

1. An array to map
2. A callback function

The map function will return a new array based on the results of the callback function.

*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const eqArrays = function(array1, array2) {

//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (const [idx, el] of array1.entries()) {
//     if (el !== array2[idx]) {
//       return false;
//     }
//   }
//   return true;
// };

// // This function uses eqArrays to check if two arrays are equal and prints a message to the console.
// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

//The map function will return a new array based on the results of the callback function.
const map = function(array, callback) {
  const results = [];
  //to loop arguments in our first parameter array using for..of
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//Test case
const words = ["Gabrielle Kaye", "Son", "Rap", "Dean Aurelius", "Lorenzo"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'G', 'S', 'R', 'D', 'L' ]);

console.log(results1);