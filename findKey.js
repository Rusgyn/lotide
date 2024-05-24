/**Implement the function findKey which takes in an 
 * INPUT:
 * function findKey
 * @param1 = object and a 
 * @param2 = callback.
 * OUTPUT:
 * It should scan the object and return the first key for which the callback returns a truthy value. 
 * If no key is found, then it should return undefined.
 */

// FUNCTION IMPLEMENTATION: Function findKey.
const findKey = function(object1, callback) {
  
  let result = undefined;

  // Obtain the value property from the given object.
  let objValue = Object.values(object1);
  console.log("Value: ", objValue);
  
  for (let objKey in object1) {
    console.log("Key: ", objKey);
    
  }

  return result;
};

// TEST CASE;
console.log(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
)); // => "noma"


