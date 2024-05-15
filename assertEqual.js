
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("lighthouse labs", "bootcamp");
assertEqual("lighthouse labs", "lighthouse labs");
assertEqual("lighthouse labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(10, "10");
assertEqual(2, -2);
assertEqual(5.5, 5.50);
assertEqual(1.1, 1.01);

