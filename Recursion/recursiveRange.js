function recursiveRange(num){
   //base case
   if (num === 1) return 1;
   //diff input
   return num + recursiveRange(num-1);
}

console.log(recursiveRange(4));
console.log(recursiveRange(16));