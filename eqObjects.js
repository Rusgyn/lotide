// HELPER FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION IMPLEMENTATIONS:
//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {};