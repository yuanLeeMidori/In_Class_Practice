/**
 * input: a string - str
 * output: a string - reverse version of str
 */

function reverse(str) {
    let r_str = '';
    // base case
    // when the string is empty

    // diff input
    // slice the last ?
    console.log(str.length);

    r_str += str.substring(str.length-1, str.length);
    str = str.substring(0, str.length-1);
    console.log(r_str);
    console.log(str);
    console.log(str.length);

    r_str += str.substring(str.length-1, str.length);
    str = str.substring(0, str.length-1);
    console.log(r_str);
    console.log(str);
    console.log(str.length);

    r_str += str.substring(str.length-1, str.length);
    str = str.substring(0, str.length-1);
    console.log(r_str);
    console.log(str);
    console.log(str.length);

    return;
}

console.log(reverse('dog'));