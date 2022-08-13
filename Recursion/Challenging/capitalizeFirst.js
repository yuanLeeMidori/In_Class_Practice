// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arrStr) {
    
    if (arrStr.length === 0) return [];

    // Capitalize the first char of the first element of array
    // 1. Access the first char of the element, upper case it
    // 2. Concat the result of 1. with the rest of the element
    arrStr[0] = arrStr[0].charAt(0).toUpperCase().concat(arrStr[0].slice(1));
    
    // recursively run the function with the rest of them (slice the first)
    // until the length of array is 0  (go back to the first line, when array length is 0)
    return [arrStr[0]].concat(capitalizeFirst(arrStr.slice(1)));
}

let arr = ['car', 'taco', 'banana']
// console.log(arr[0].charAt(0).toUpperCase().concat(arr[0].slice(1)))
console.log(capitalizeFirst(arr))