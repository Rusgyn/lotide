/* Implement a function which will take in two arrays and console.log an appropriate message to the console. */

// This function checks if two arrays have the same elements in the same order.
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

// This function uses eqArrays to check if two arrays are equal and prints a message to the console.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// This function will return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let itemsRemain = [];
  for (let j = 0; j < source.length; j++) {
    if (!itemsToRemove.includes(source[j])) {
      itemsRemain.push(source[j]);
    }
  }
  return itemsRemain;
};

//console.log(without([1, 2, 3], [1])); // => [2, 3]

const words = ["hello", "world", "lighthouse"]; //array of string(word) typeof.
const numbers = [1, 2, 3]; // array of number typeof.
const numString = ["1", "2", "3"]; //array of string(number) typeof.

//to test the without() by removing the value that is also existing in the given variable elements.
console.log(without(words, ["lighthouse"]));
console.log(without(numbers, [1]));
console.log(without(numString, [1, 2, "3"]));

//to test using assertArraysEqual() if it will passed or failed with the different type of arrays assign to a variable.
//Make sure the original array was not altered by the without function.
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3]);
assertArraysEqual(numString, ["1", "2", "3"]);