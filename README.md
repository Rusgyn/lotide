# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2)`: A function which will take in two arrays and console.log an appropriate message to the console.
- `assertEqual(actual, expected)`: Will take two arguments and output if they match or not.
- `assertObjectsEqual(actual, expected)`: will take in two objects and console.log an appropriate message to the console.
- `countLetters(string)`: This function take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through. itemsToCount: an object specifying what to count
- `eqArrays(array1, array2)`: A function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
- `eqObjects(object1, object2)`: Will take in two objects and returns true or false, based on a perfect match.
- `findKey(object1, callback)`: takes in an object and a callback.
- `flatten(arrayToFlat)`: a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `head(name)`: A function that will take the first element of an array.
- `letterPosition(sentence)`: function will return all the indices (zero-based positions) in the string where each character is found.
- `middle(whatIsMidArray)`: A function which will take in an array and return the middle-most element(s) of the given array.
- `tail(array)`: A function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
- `takeUntil(array, callback)`: A function which will keep collecting items from a provided array until the callback provided returns a truthy value.
- `without(source, itemsToRemove)`: This function will return a new array with only those elements from source that are not present in the itemsToRemove array.