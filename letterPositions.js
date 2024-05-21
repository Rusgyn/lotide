// FUNCTION IMPLEMENTATION
// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
//For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let char in sentence) {
    // we can skip and not count spaces.
    if (sentence[char] === ' ') {
      continue;
    }

    if(results[sentence[char]]) {
      sentence[char].push(char);
    } 
  }

  return results;
};
