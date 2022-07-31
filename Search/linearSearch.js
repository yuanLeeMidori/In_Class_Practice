/**
 * 
 * input: an array and a value
 * output: return the index of matching value in the array / -1 if not found
 * 
 */

function linearSearch(arr, val) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    
    // can't find any
    return -1;
}
  
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1