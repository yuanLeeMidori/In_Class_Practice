/**
 * input: array and a callback
 * output: true - if ANY value of the array match the callback condition; false otherwise
 * 
 * SAMPLE INPUT / OUTPUT
 * const isOdd = val => val % 2 !== 0;
 * 
 * someRecursive([1,2,3,4], isOdd) // true
 * someRecursive([4,6,8,9], isOdd) // true
 * someRecursive([4,6,8], isOdd) // false
 * someRecursive([4,6,8], val => val > 10); // false
 * 
 */

function someRecursive(arr, cb) {
     
    // base case
    // - when there is nothing left in the arr, return false
    if (arr.length == 0) return false;

    // diff input
    // - check the first element, if it matches the cb condition, return true; otherwise, check the next element
    if (!cb(arr[0])) return someRecursive(arr.slice(1), cb);
    else return true;
}
 
// test case 1
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd));

// text case 2
const notANum = val => isNaN(val);
console.log(someRecursive([1, 2, 3, 'h'], notANum))
console.log(someRecursive([1,2,3,144444], notANum))
