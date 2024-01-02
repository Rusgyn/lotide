


//This function checks if two arrays are equal and prints a message to the console.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//This function take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {
  let count = {};

  for (let char of string.toLowerCase()) { //to convert capital letter to lower
    if (char !== ' ') { //handle cases where the input string has an empty space
      count[char] ||= 0; //initialize to zero if undefined
      count[char]++;
    }
  }
  
  return count;
};

for (let [letter, count] of Object.entries(countLetters('Lighthouse in the HOUSE 2024'))) {
  const expected = { 'l': 1, 'i': 2, 'g': 1, 'h': 4, 't': 2, 'o': 2, 'u': 2, 's': 2, 'e': 3, 'n': 1, '2': 2, '0': 1, '4': 1};

  assertEqual(expected[letter], count);
}