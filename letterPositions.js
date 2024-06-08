// A function which will return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};
  
  for (let index = 0; index < sentence.length; index++) {
    // we can skip and not count spaces.
    let character = sentence[index];
    if (character !== ' ') {
      // set a property with that string key to:
      //    the value of string indexes, a multiple indexes maybe added to
      //      the characters that was already there.
      if (results[character]) { // True, letter exist
        results[character].push(index);
      } else { // Letter or char does not exist yet
        results[character] = [index];
      }
    }
  }

  return results;
};

module.exports = letterPositions;