function isPalindrome(str) {

    // base case
    if (str.substring(0, 1) != str.substring(str.length - 1, str.length)) { // head and tail are diff
        return false;
    } else if (str.length <= 1) {
        return true;
    }

    // diff input
    return isPalindrome(str.substring(1, str.length - 1));
}


console.log(isPalindrome('minny'));
console.log(isPalindrome('poiuyuiop'));
console.log(isPalindrome('poiuyyuiop'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log(isPalindrome('amanaplanacanalpanama'));


