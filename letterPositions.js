/* A new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
*/

// This eqArrays function checks if two arrays have the same elements in the same order.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// This assertArraysEqual function uses eqArrays to check if two arrays are equal and prints a message to the console.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//This letterPositions function take in a sentence (as a string) and then return the indexes of each of the letters in that sentence.
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index++) {
    let char = sentence[index];
    if (char !== " ") {
      if (Object.prototype.hasOwnProperty.call(results, char)) {
        results[char].push(index);
      } else {
        results[char] = [index];
      }
    }
  }

  return results;
};

//Test cases will check the indexes of all characters.
const test1 = ('hello');
const test2 = ('hi, LHL');
const test3 = ('LHL 2024');

console.log(letterPositions(test1)); /* => { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } */
console.log(letterPositions(test2)); /* => { h: [ 0 ], i: [ 1 ], ',': [ 2 ], L: [ 4, 6 ], H: [ 5 ] } */
console.log(letterPositions(test3)); /* => { '0': [ 5 ], '2': [ 4, 6 ], '4': [ 7 ], L: [ 0, 2 ], H: [ 1 ] } */

assertArraysEqual(letterPositions(test1).l, [2, 3]);
assertArraysEqual(letterPositions(test2).L, [4, 6]);
assertArraysEqual(letterPositions(test3).H, [1]);