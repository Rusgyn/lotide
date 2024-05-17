// FUNCTION IMPLEMENTATION: Function that takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let [index, element] of arr1.entries()) {
    if (element !== arr2[index]) {
      return false;
    }
  }

  return true;

};

// FUNCTION IMPLEMENTATION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    console.log("Please provide an array argument/s");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

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

// TEST CODE:
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // [ 'hello', 'world' ]
// TEST CASE using assertArraysEqual
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [10.1, 10.01, -10.1, 10.6, 2];
without(numbers, [10.1, 10.6]); //[ 10.01, -10.1, 2 ]
// TEST CASE using assertArraysEqual
assertArraysEqual(numbers, [10.1, 10.01, -10.1, 10.6, 2]);
