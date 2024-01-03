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
  for (let [index, char] of Object.entries(sentence)) {
    if (char !== ' ') {
      if (Object.prototype.hasOwnProperty.call(results, char)) { //To check if the char or key already in our object called results.
        results[char] = [results[char], Number(index)].flat(); //flat method concatenated arrays to a new array.
      } else {
        results[char] = [Number(index)];
      }
    }
  }
  return results;
};

//Test case will check the indexes of all letters.
console.log(letterPositions('hello world')); /* => {
  h: [ 0 ],
  e: [ 1 ],
  l: [ 2, 3, 9 ],
  o: [ 4, 7 ],
  w: [ 6 ],
  r: [ 8 ],
  d: [ 10 ]
}
*/
assertArraysEqual(letterPositions('hello world').e, [1]);