//The map function will return a new array based on the results of the callback function.
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results; // The results will return a new array based on the results of our callback function.
};

module.exports = map;
