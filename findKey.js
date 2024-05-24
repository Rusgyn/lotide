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

  for (let objKey of object1) {

  }

  return result;
};

// TEST CASE;
findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"


