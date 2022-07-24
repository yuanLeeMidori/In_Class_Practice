/**
 * 1,1,2,3,5,8,13
 * one two add, two three add, three four add...
 * 1, 1+nothing, 1+1, 1+(1+1), (1+(1+1)) + (1+1)), [1+(1+1) + (1+(1+1)) + (1+1))]
 * f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5
 * f(5) = f(4)+f(3)
 * f(num) = f(num-1)+f(num-2)

*/

function fib(num){
    // base case
    if (num <= 2 && num > 0) {
        return 1;
    } else if (num < 0) {
        return 0;
    }
    return fib(num-1) + fib(num-2);
    
}
  
console.log(fib(36));
console.log(fib(40));
console.log(fib(-1));