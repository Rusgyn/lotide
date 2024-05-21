// HELPER IMPLEMENTATION: Function that takes in two arrays and returns true or false, based on a perfect match.
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
    console.log("Please provide an array argument/s");
    return;
  }

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};


// FUNCTION IMPLEMENTATION
// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let index = 0; index < sentence.length; index++) {
    
    // we can skip and not count spaces.
    if (sentence[index] !== ' ') {
      // set a property with that string key to:
      //    the value of string indexes, a multiple indexes maybe added to 
      //      the characters that was already there.
      if(results[sentence[index]]) { //True, letter exist
        results[sentence[index]].push(index);
      } else { //Letter or char does not exist yet
        results[sentence[index]] = [index];
      }
    }
  }

  return results;
};

//TEST CODE
console.log(letterPositions('lighthouse in the house'));

//TEST CASE, using assertArrayEqual().
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]); //=> ✅✅✅ Assertion Passed: 0 === 0
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]); //=> ✅✅✅ Assertion Passed: 1,11 === 1,11
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]); //=> ✅✅✅ Assertion Passed: 2 === 2
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); //=> ✅✅✅ Assertion Passed: 3,5,15,18 === 3,5,15,18
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 14]); //=> ✅✅✅ Assertion Passed: 4,14 === 4,14
assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 19]); //=> ✅✅✅ Assertion Passed: 6,19 === 6,19
assertArraysEqual(letterPositions("lighthouse in the house").u, [7, 20]); //=> ✅✅✅ Assertion Passed: 7,20 === 7,20
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]); //=> ✅✅✅ Assertion Passed: 8,21 === 8,21
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]); //=> ✅✅✅ Assertion Passed: 9,16,22 === 9,16,22
assertArraysEqual(letterPositions("lighthouse in the house").n, [12]); //=> ✅✅✅ Assertion Passed: 12 === 12
