/* Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

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

// This function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arrayToFlat) {

  let flattenedArray = [].concat.apply([], arrayToFlat);
  
  return flattenedArray;
};

//to test using assertArraysEqual() if the return flattened elements has passed or failed.
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
console.log(assertArraysEqual(flatten([]), []));
console.log(assertArraysEqual(flatten([[1, 2], [3, 4], [5, 6],[7, 8, 9], [10, 11, 12, 13, 14, 15]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));