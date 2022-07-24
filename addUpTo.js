function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}



console.log(addUpTo(16));

const t3 = performance.now();
addUpTo(16);
const t4 = performance.now();
console.log(`Call to addUpTo took ${t3 - t4} milliseconds.`);