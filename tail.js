// FUNCTION THAT TEST CASES

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION: Function that returns a new array with the tail of the given array.

const tail = function(arr) {
  
  return arr.slice(1);
  
}

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check an empty array
const empty = [];
const resultEmpty = tail(empty);
assertEqual(resultEmpty.length, 0); // ensure we get back 0;

// Test Case: Check an array with one element
const single = ["only"];
const resultSingle = tail(single);
assertEqual(resultSingle.length, 0); // ensure we get back 0;