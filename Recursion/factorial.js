// function factorial(num){
//     if (num === 1 || num === 0) {
//         return 1;
//     }
//     return num * factorial(num-1);
   
// }


// didn't take care of negative value
// there should be a case to return 0 when the num is less than 0

function factorial(num){
    if (num === 1 || num === 0) {
        return 1;
    } else if (num < 0) return 0;
    return num * factorial(num-1);
   
}

console.log(factorial(4));
console.log(factorial(16));
console.log(factorial(-2));

