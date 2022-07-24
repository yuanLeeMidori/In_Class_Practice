/**
 * input: a string - str
 * output: a string - reverse version of str
 */

function reverse(str) {
    let r_str = '';
    // base case
    // when the string is empty
    if (str.length === 0) return '';

    // diff input
    // add and remove the last
    r_str += str.substring(str.length - 1, str.length);
    
    return r_str + reverse(str.substring(0, str.length - 1));

}

console.log(reverse('abcdefghijklmno'));
console.log(reverse('! abcdefghijkl mno'));
console.log(reverse(''));