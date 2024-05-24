/**
 * Function will take two parameters
 * @Params1 - array to work with
 * @Params2 - The callback (which Lodash calls "predicate")
 * return a "slice of the array with elements taken from the beginning"
 * stops when it returns a truthy value
 */

// HELPER FUNCTION: Function that takes in two arrays and returns true or false, based on a perfect match.

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

// HELPER FUNCTION: Function that takes in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {

  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    console.log("Both arguments must be array");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};

// FUNCTION IMPLEMENTATION: Keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  
  const results = [];

  for (let element of array) {
    // Applying the callback function, when it's truthy the iteration stop.
    if (callback(element)) {
      break;
    } else {
    // The element will be pushed to new array results until the callback is called and break the iteration of each element in the array.
      results.push(element);
    }
  }

  return results;
};

// TEST CASE:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);