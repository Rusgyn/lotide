const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  
  let arrEmpty = (array1.length === 0 || array2.length === 0);
  let arrLength = (array1.length !== array2.length);

  if (arrEmpty || arrLength) {
    return false;
  }

  for (const [idx, el] of array1.entries()) {
    if (el !== array2[idx]) {
      return false;
    }
  }
  return true;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false);
assertEqual(eqArrays(["1", "2", "3"], []), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);