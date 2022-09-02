// Return the sum of all even numbers in an object which may contain nested objects

function nestedEvenSum(obj) {
    
    let evenSum = 0;

    if (typeof obj === 'object') {
        for (let i in obj) {
            // not an object
            if (!isNaN(obj[i]) && obj[i] % 2 === 0) {                
                // console.log(obj[i]);
                evenSum += obj[i];
                // console.log(evenSum);
            }
            else
                evenSum += nestedEvenSum(obj[i]);
    
        }
    }
    return evenSum;    
}  
  
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
// console.log(isNaN(Object.values(obj1)[1]))

// let input = obj1.obj.otherObj;
// for (let k in input) {
//     if (typeof input[k] !== 'object')
//         // if (typeof input[k] === 'number')
//         console.log('');
//     else
//         console.log(input[k])
// }

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};


console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10