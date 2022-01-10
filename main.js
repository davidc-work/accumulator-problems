/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been completed for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/

const sum = arr => arr.reduce((a, b) => a + b, 0);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

const doubleLetters = str => str.split('').map(l => l + l).join('');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

const doubleNumbers = arr => arr.map(n => n * 2);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

const multiplyNumbers = (arr, n) => arr.map(a => a * n);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

const interleave = (arr1, arr2) => {
    var r = [];
    for (var i = 0; i < arr1.length; i++) {
        r.push(arr1[i]);
        r.push(arr2[i]);
    }

    return r;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

const createRange = (n, str) => Array(n).fill(str);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

const flipArray = arr => {
    var obj = {};
    arr.forEach((a, i) => obj[a] = i);

    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

const arraysToObject = arr => {
    var obj = {};
    arr.forEach(a => obj[a[0]] = a[1]);

    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

const reverseString = str => {
    var r = '';
    for (var i = str.length - 1; i >= 0; i--) r += str[i];

    return r;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

const repeats = str => {
    if (str.length % 2 == 1) return false;
    const h = str.length / 2;
    const firstHalf = str.slice(0, h);
    const secondHalf = str.slice(h);

    return firstHalf == secondHalf;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

const everyOther = str => str.split('').filter((e, i) => i % 2 == 0).join('');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

const allEqual = str => !str.replaceAll(str[0], '').length;

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/

const sumLetters = str => str.split('').reduce((a, b) => a + parseInt(b), 0);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

const countVowels = str => str.split('').filter(c => ['a', 'e', 'i', 'o', 'u'].includes(c)).length;

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

const split = str => {
    var arr = [];
    for (var i = 0; i < str.length; i++) arr.push(str[i]);

    return arr;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

const getCodePoints = str => str.split('').map(c => c.codePointAt());

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

const letterMap = str => {
    const obj = {};
    str.split('').forEach((c, i) => obj[c] = i);

    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

const letterCount = str => {
    var occurences = {};
    str.split('').forEach(c => occurences[c] = 1 + (occurences[c] || 0));

    return occurences;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,3 it should return false because the only number between 0 and 3 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

const threeOdds = (a, b) => b - a > 5;


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

const leftPad = (str, l, f) => {
    const fill = l - str.length;
    return fill > -1 ? (f.repeat(fill) + str) : str;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

const createString = (n, c) => n < 1 ? '' : c.repeat(n);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

const factorial = n => {
    if (n == 0) return 1;

    var f = n;
    for (var i = n - 1; i > 1; i--) f *= i;

    return f;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

const arrayOfNumbers = n => {
    if (n == 0) return [];

    var arr = [1];
    for (var i = 2; i <= n; i++) arr.push(i);

    return arr;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

const evenOdd = (a, b) => {
    if (a == 0 && b == 0) return {};

    var r = {};
    for (var i = a; i <= b; i++) r[i] = i % 2 ? 'odd' : 'even';

    return r;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

const growingKeys = (n, c) => {
    var obj = {};
    for (var i = 0; i < n; i++) obj[c.repeat(i + 1)] = true;

    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

const every = (arr, n) => {
    if (!arr.length) return true;

    const a = Array.from(new Set(arr));
    return a.length == 1 && a[0] == n;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

const some = (arr, n) => arr.includes(n);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

const toSentence = arr => {
    if (!arr.length) return '';
    if (arr.length == 1) return arr[0];

    var str1 = arr.slice(-2, -1) + ' and ' + arr.slice(-1);
    if (arr.length == 2) return str1;

    var str2 = arr[0] + ', ';

    for (var i = 1; i < arr.length - 2; i++) {
        str2 += arr[i] + ', ';
    }

    return str2 + str1;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

const acronym = arr => arr.map(str => str[0]).join('');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

const min = arr => arr.reduce((a, b) => (b < a || a == undefined) ? b : a, undefined);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

const index = arr => {
    var obj = {};
    arr.forEach((o, i) => obj[o[Object.keys(o)[0]]] = o);

    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

const invert = obj => {
    var keys = Object.keys(obj);
    var o = {};

    for (var i = 0; i < keys.length; i++) {
        const k = keys[i];
        o[obj[k]] = k;
    }

    return o;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

const addSignature = (name, obj) => {
    if (!obj) return {};

    var o = {};
    Object.keys(obj).forEach(k => o[k + '-signed'] = obj[k] + ' - ' + name);

    return o;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

const pairs = obj => Object.keys(obj).map(k => k + ' - ' + obj[k]);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

const sumValues = obj => Object.keys(obj).reduce((a, b) => a + obj[b], 0);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

const biggestProperty = obj => {
    var max = undefined;
    var key = undefined;
    for (const [k, v] of Object.entries(obj)) {
        if (v > max || max == undefined) {
            max = v;
            key = k;
        }
    }

    return key;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

const keyForValue = (obj, v) => (Object.entries(obj).find(e => e[1] == v) || [undefined])[0];

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

const containsValue = (obj, v) => Object.entries(obj).find(e => e[1] == v) != undefined;

//
