# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Description
The [Lotide project](https://github.com/Rusgyn/lotide) is inspired by the Lodash project, which is a utility library for JavaScript. While Lodash itself is quite powerful, our version of it is simpler in order to focus on learning the fundamentals of programming and data management using JavaScript.

The Lotide project is a modular collection of functions that operate on data, namely Arrays and Objects. In creating these functions, we will become more comfortable with FOCAL (Functions, Objects, Conditionals, Arrays, Loops) as well as writing modular code and Automated Testing (by writing unit tests). At first, we create our own assertion functions for writing test code, but by the end of the project we use industry-standard libraries Mocha and Chai for our automated testing. Through Lotide, we also learn about software dependencies, package management, and npm, the package manager of choice in the Node community. We learn that anyone can publish their own npm package by publishing Lotide.

## Documentation: List of function

The following functions are currently implemented:

- [`assertArraysEqual(array1, array2)`](https://github.com/Rusgyn/lotide/blob/main/assertArraysEqual.js): A function which will take in two arrays and console.log an appropriate message to the console.
- [`assertEqual(actual, expected)`](https://github.com/Rusgyn/lotide/blob/main/assertEqual.js): Will take two arguments and output if they match or not.
- [`assertObjectsEqual(actual, expected)`](https://github.com/Rusgyn/lotide/blob/main/assertObjectsEqual.js): will take in two objects and console.log an appropriate message to the console.
- [`countLetters(string)`](https://github.com/Rusgyn/lotide/blob/main/countLetters.js): This function take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- [`countOnly(allItems, itemsToCount)`](https://github.com/Rusgyn/lotide/blob/main/countOnly.js): allItems: an array of strings that we need to look through. itemsToCount: an object specifying what to count
- [`eqArrays(array1, array2)`](https://github.com/Rusgyn/lotide/blob/main/eqArrays.js): A function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
- [`eqObjects(object1, object2)`](https://github.com/Rusgyn/lotide/blob/main/eqObjects.js): Will take in two objects and returns true or false, based on a perfect match.
- [`findKey(object1, callback)`](https://github.com/Rusgyn/lotide/blob/main/findKey.js): takes in an object and a callback.
-[`findKeyByValue(object, value)`](https://github.com/Rusgyn/lotide/blob/main/findKeyByValue.js): Scan the object returns the first key which contains the given value.
- [`flatten(arrayToFlat)`](https://github.com/Rusgyn/lotide/blob/main/flatten.js): a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- [`head(name)`](https://github.com/Rusgyn/lotide/blob/main/head.js): A function that will take the first element of an array.
- [`letterPosition(sentence)`](https://github.com/Rusgyn/lotide/blob/main/letterPositions.js): function will return all the indices (zero-based positions) in the string where each character is found.
- [`map(array, callback)`](https://github.com/Rusgyn/lotide/blob/main/map.js): function will return a new array based on the results of the callback function.
- [`middle(whatIsMidArray)`](https://github.com/Rusgyn/lotide/blob/main/middle.js): A function which will take in an array and return the middle-most element(s) of the given array.
- [`tail(array)`](https://github.com/Rusgyn/lotide/blob/main/tail.js): A function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
- [`takeUntil(array, callback)`](https://github.com/Rusgyn/lotide/blob/main/takeUntil.js): A function which will keep collecting items from a provided array until the callback provided returns a truthy value.
- [`without(source, itemsToRemove)`](https://github.com/Rusgyn/lotide/blob/main/without.js): This function will return a new array with only those elements from source that are not present in the itemsToRemove array.

## Getting Started

### Dependencies:
- node
- npm
- chai
- mocha

### Installation:
- open your command line and run

    `npm init`

    `npm install mocha@9.2.2 chai@4.3.7 --save-dev`

    Note: you may install the current versions.

- open `package.json` and modify the value of test to "mocha"

  <i>from:</i>

        "scripts": {
                "test": "./node_modules/mocha/bin/mocha"
            },
    
  <i>to:</i>

        "scripts": {
                "test": "mocha"
            },

### Executing the Program:
There are multiple mini clone Lodash library. To execute the function

1. Clone the repository [lotide](https://github.com/Rusgyn/lotide) to your local device/machine.
  For reference, see [github cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) steps. 
2. Install the dependencies. Follow the installation steps above.
3. Open the code
4. On the [command line](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line), navigate to the root directory of your lotide
    ```
    cd /path/to/where/you/save/lotide
    ```
5. Execute the function.

    Syntax:
    ```
    node <function name>
    ```

    Example:
    ```
    node assertArraysEqual.js
    ```
6. Unit testing.

    i.  On the command line, navigate to the subfolder <b>test</b>.
    ```
    // If your current folder is lotide.
    // confirm by running the command pwd

    cd test
    ```
    ii.  run the command
    ```
    npm test
    ```

