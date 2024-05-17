// FUNCTION IMPLEMENTATION: The eqArrays function will take in two arrays and returns true or false, based on a perfect match.
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

// FUNCTION IMPLEMENTATION: The assertArraysEqual function will take in two arrays and console.log an appropriate message to the console.

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

// FUNCTION IMPLEMENTATION: A function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {

  let flattenedArr = [];

  if (!Array.isArray(arr)) {
    console.log("Please provide an array argument");
    return;
  }

  for (let element in arr) {
    if (Array.isArray(arr[element])) {
      for (let el in arr[element]) {
        flattenedArr.push(arr[element][el]);
      }
    } else {
    flattenedArr.push(arr[element]);
    }
  }

  return flattenedArr;
}

//TEST CODE:
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([[7, 8], [9, 10], 11, [12]])); // => [7, 8, 9, 10, 11, 12]

//TEST CASE:
const numbers = [10.1, [10.01, -10.1], 10.6, [2, 4], 6];
console.log(flatten(numbers)); //[10.1, 10.01, -10.1, 10.6, 2, 4, 6]
// TEST CASE using assertArraysEqual
assertArraysEqual(flatten(numbers), [10.1, 10.01, -10.1, 10.6, 2, 4, 6]);