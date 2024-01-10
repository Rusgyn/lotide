/*
Instruction
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

*/

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (const [idx, el] of array1.entries()) {
    if (el !== array2[idx]) {
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

const takeUntil = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    //applying the callback function to each item in the array and adding the result to the results array.
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
  return results;
};

//Test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // => [ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); //=> passed
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // => [ "I've", 'been', 'to', 'Hollywood' ]
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]); // => passed
console.log(results2);