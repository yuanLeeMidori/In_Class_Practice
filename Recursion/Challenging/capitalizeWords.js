function capitalizedWords (arr) {
    
    // console.log(arr[0].toUpperCase());
    for (let i in arr) {
        arr[i] = arr[i].toUpperCase();
    }
    console.log(arr);
    return arr;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

  