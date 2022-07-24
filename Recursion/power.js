function power(base, expon){
    
    if (expon === 0) {
        return 1;    
    }
    return base * power(base, expon-1);
}

console.log(power(2,0));
console.log(power(2,1));
console.log(power(2, 3));
console.log(power(2, 14));