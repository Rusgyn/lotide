/*
Instruction
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = takeUntil;

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