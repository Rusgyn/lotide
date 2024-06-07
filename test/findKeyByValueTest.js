// Test case for findKeyByValue().

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", function() {

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  const babyFoods = {
    milk: "Kendamil formula",
    fruit: "Apple",
    snack: "Goldfish Cheddar cracker"
  };
  
  it("should return 'sci_fi' as key for the given value argument of 'The Expanse' in reference to bestTVShowsByGenre object", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it("should return 'comedy' as key for the given value argument of 'Brooklyn Nine-Nine' in reference to bestTVShowsByGenre object", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("should return 'milk' as key for the given value argument of 'Kendamil formula' in reference to babyFoods", () => {
    assert.deepEqual(findKeyByValue(babyFoods, "Kendamil formula"), "milk");
  });

  it("should return 'snack' as key for the given value argument of 'Goldfish Cheddar cracker' in reference to babyFoods", () => {
    assert.deepEqual(findKeyByValue(babyFoods, "Goldfish Cheddar cracker"), "snack");
  });

  it("should return 'undefined' as key for a given value argument that does not exist in the given object", () => {
    assert.deepEqual(findKeyByValue(babyFoods, "cars"), undefined);
  });

});

/*

// TEST CASE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); // => drama
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show")); // => undefined
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")); // => comedy

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => ✅✅✅ Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);// ✅✅✅ Assertion Passed: undefined === undefined=>
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");// => ✅✅✅ Assertion Passed: comedy === comedy
*/