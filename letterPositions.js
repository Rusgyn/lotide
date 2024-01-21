/* A new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

// This eqArrays function checks if two arrays have the same elements in the same order.

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/* This letterPositions function will return all the indices (zero-based positions) in the string where each character is found.*/

const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    if (char !== " ") {
      if (results[char]) { //To check if the char or key already in our object called results.
        results[char].push(index);
      } else {
        results[char] = [index];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

/*Below test cases were used during the process of completing the code.
*The test case is now through Mocha and Chai.
*/

// //Test cases will check the indexes of all characters.
// const test1 = letterPositions('hello');
// const test2 = letterPositions('hi, LHL');
// const test3 = letterPositions('LHL 2024');

// console.log(test1); /* => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } */
// console.log(test2); /* => { h: [ 0 ], i: [ 1 ], ',': [ 2 ], L: [ 4, 6 ], H: [ 5 ] } */
// console.log(test3); /* => { '0': [ 5 ], '2': [ 4, 6 ], '4': [ 7 ], L: [ 0, 2 ], H: [ 1 ] } */

// //to test using assertArraysEqual() if the return results has passed or failed.
// assertArraysEqual(test1['h'], [0]);
// assertArraysEqual(test1['e'], [1]);
// assertArraysEqual(test1['l'], [2, 3]);
// assertArraysEqual(test1['o'], [4]);

// assertArraysEqual(test2['h'], [0]);
// assertArraysEqual(test2['i'], [1]);
// assertArraysEqual(test2[','], [2]);
// assertArraysEqual(test2['L'], [4, 6]);
// assertArraysEqual(test2['H'], [5]);

// assertArraysEqual(test3['L'], [0, 2]);
// assertArraysEqual(test3['H'], [1]);
// assertArraysEqual(test3['0'], [5]);
// assertArraysEqual(test3['2'], [4, 6]);
// assertArraysEqual(test3['4'], [7]);


// //OTHER SOLUTION #1:
// // const letterPositions = function(sentence) {
// //   const results = {};
// // sentence.split('').forEach((char, index) => {
// //   if (char !== " ") {
// //     if (results[char]) { //To check if the char or key exist in our object called results.
// //       results[char].push(index);
// //     } else {
// //       results[char] = [index];
// //     }
// //   }
// // });
// //   return results;
// // };

// //OTHER SOLUTION #2:
// // const letterPositions = function(sentence) {
// //   const results = {};
// //   for (let [index, char] of Object.entries(sentence)) {
// //     if (char !== ' ') {
// //       if (Object.prototype.hasOwnProperty.call(results, char)) { //To check if the char or key already in our object called results.
// //         results[char] = [results[char], Number(index)].flat(); //flat method concatenated arrays to a new array.
// //       } else {
// //         results[char] = [Number(index)];
// //       }
// //     }
// //   }
// //   return results;
// // };