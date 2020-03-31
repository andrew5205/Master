

// Is Palindrome
// Create a function that returns a boolean whether the string is a strict palindrome. 
// For "a x a" or "racecar", return true. 
// Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
function isPalindrome(str) {
    var str = str.toLowerCase();
    // console.log(str);
    for (var i = 0; i < str.length/ 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('DEFED'));



// ignore white space (spaces, tabs, returns), capitalization and punctuation.
function isPalindromeIgnoreSpace(str) {
    // var newStr = "";
    var str = str.toLowerCase().replace(/[\W_]/g, "");     // or replace(/[^A-Za-z0-9]/g, "")
    // \W metacharacter is used to find a non-word character
    // console.log(str);
    for (var j = 0; j < str.length/2; j++) {
        if (str[j] != str[str.length - 1 - j]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindromeIgnoreSpace('DE FE_D'));

/* ************************************************************************************************************************ */

function checkPalindromeT(str) {
    return str == str.split("").reverse().join("") ? true : false;
}
console.log(checkPalindromeT("madam"));
console.log(checkPalindromeT("should fail"));




