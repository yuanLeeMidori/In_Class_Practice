/**
 * input: and array of arrays
 * output: all value flattened
 * 
 * e.g,
 * flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 */

function flatten(arr) {

    // eventually, the array will be sliced till nothing is left, and we'll have something to return
    if (arr.length === 0) return [];

    // how to "de-array" an array?
    // console.log(Array.prototype.concat.apply([], [[1], [2, 3], [6]]))

    // how do we know when to stop?
    // when the elements are not array anymore
    if (Array.isArray(arr[0]))        
        return flatten(arr[0]).concat(flatten(arr.slice(1)));    
    else
        return [arr[0]].concat(flatten(arr.slice(1)));
     
}

// console.log([1,2].concat([]))
// console.log([].concat(...[].concat(...[].concat(...[1, 2, 3, 6]))))
// console.log([].concat(...[1, 2, 3, 6]))

console.log(flatten([1, [2, [3, 4], [[5]]]]))