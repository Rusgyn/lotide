// A function that retrieve the first element from the array, "head" of the array.

const head = function(arr) {
  if (arr.length === 0) { // This condition checks if the given array is empty
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;