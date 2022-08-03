function binarySearch(arr, val) {
    
    // set left, right, mid
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    

    // loop ends when the value is found (aka equal to mid), also left should always be smaller than right
    while (arr[mid] !== val && left <= right) {
        
        // search from the middle
        if (arr[mid] > val) {
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else if (arr[mid] < val) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
        
    }    

    if (arr[mid] === val) return mid;
    
    return -1;
    
}
  
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10));


