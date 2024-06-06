// Test Code for assertEqual()

const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Test case: different strings
assertEqual("lighthouse labs", "bootcamp"); // Test case: different strings, all lowercase
assertEqual("lighthouse labs", "lighthouse labs"); // Test case: identical strings
assertEqual("lighthouse labs", "Lighthouse Labs"); // Test case: identical strings, different case
assertEqual(1, 1); // Test case: identical numbers
assertEqual(10, "10"); // Test case: number vs string
assertEqual(2, -2); // Test case: positive vs negative number
assertEqual(5.5, 5.50); // Test case: different decimal precision
assertEqual(1.1, 1.01); // Test case: different decimal values
