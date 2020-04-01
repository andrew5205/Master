
// String: Is Permtutaoin (Is Permutation)


// Create function that returns whether second string is a permutation of first. 
// For example, given ("mister","stimer"), return true. 
// Given ("mister", "sister"), return false.


function isPermutation( str1, str2) {
    if ( str1.length != str2.length) {
        return false;
    } else {
        str1 = str1.toLowerCase().split("").sort().join("");
        str2 = str2.toLowerCase().split("").sort().join("");
    }
    return str1 == str2 ? true : false;

}

console.log(isPermutation("mister","stimer"));      // true
console.log(isPermutation("mister","sister"));      // false
