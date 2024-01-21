
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects")

// FUNCTION IMPLEMENTATION. Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  // util library's inspect function is use to print out the object assertion message.
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

/*Below test cases were used during the process of completing the code.
*The test case is now through Mocha and Chai.
*/

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertObjectsEqual(shirtObject , anotherShirtObject);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);