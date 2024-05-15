
// FUNCTION THAT TEST CASES
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION: Function that retrieve the first element from the array, "head" of the array.
const head = function(arr) {
  if (!arr) {
    return undefined;
  } else {
    return arr[0];
  }
}

// TEST CODE
assertEqual(head([5, 6, 7]), 5); // Test case output: Assertion Passed. Head is 5.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//Test case output: Assertion Passed. Head is "Hello".
assertEqual(head([]), "Hello"); // Test case output: Assertion Failed. Array is undefined.
assertEqual(head([3]), 3); //Test case output: Assertion Passed. Head is 3.