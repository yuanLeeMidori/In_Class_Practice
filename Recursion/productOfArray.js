function productOfArray(arr) {
    
    let result = 1;
    // base case - when there is nothing left in the arr
    if (arr.length === 0) {
        return 1;
    }
    result *= arr[0];
    return result * productOfArray(arr.slice(1));
    
}

console.log(productOfArray([1]));
console.log(productOfArray([1, 2]));
console.log(productOfArray([4, 16, 48, 36, 144]));