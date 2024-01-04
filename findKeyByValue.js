/* Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.  */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKeyByValue()which takes in an object and a value.
const findKeyByValue = function(obj, value) {
  //using Object.Keys to return all the keys of the object.
  //using .filter method to check is any of the keys match the value provided.
  const foundKeyByVal = Object.keys(obj).filter(key => obj[key] === value);

  //for..of method is used to loop over keys returned by the Object.Keys which is in array.
  for (const foundKey of foundKeyByVal) {
    return foundKey;
  }
};

//Test cases to check the functionality of the code.
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

findKeyByValue(bestTVShowsByGenre, "The Expanse"); // => sci_fi
findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"); // => comedy
findKeyByValue(bestTVShowsByGenre, "The Wire"); // => drama
findKeyByValue(bestTVShowsByGenre, "That '70s Show"); // => undefined
findKeyByValue(babyFoods, "Kendamil formula"); // => milk
findKeyByValue(babyFoods, "Apple"); // => fruit
findKeyByValue(babyFoods, "Goldfish Cheddar cracker"); // => snack
findKeyByValue(babyFoods, "cars"); // => undefined

//to test using assertEqual() if the return results has passed or failed.
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(babyFoods, "Kendamil formula"), "milk");
assertEqual(findKeyByValue(babyFoods, "Apple"), "fruit");
assertEqual(findKeyByValue(babyFoods, "Goldfish Cheddar cracker"), "snack");
assertEqual(findKeyByValue(babyFoods, "cars"), undefined);

//OTHER SOLUTION:
// Using for..in method
/*
const findKeyByValue = function(obj, value) {
  for (let objProperty in obj) {
    if (obj.hasOwnProperty(objProperty)) {
        if (obj[objProperty] === value)
            return objProperty;
    } else {
      return undefined;
    }
  }
}
*/