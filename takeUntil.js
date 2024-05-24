// FUNCTION IMPLEMENTATION:
// Function will take two parameters
// @Params1 - array to work with
// @Params2 - The callback (which Lodash calls "predicate")
// return a "slice of the array with elements taken from the beginning"
// stops when it returns a truthy value

//Keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  
  const results = [];

  for (let element of array) {
    // Applying the callback function, when it's truthy the iteration stop.
    if (callback(element)) {
      break;
    } else {
    // The element will be pushed to new array results until the callback is called and break the iteration of each element in the array.
      results.push(element);
    }
  }

  return results;
};

// TEST CASE:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);