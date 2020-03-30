
// Is rotation

// Create the function isRotation(str1,str2) that returns whether the second string is a
// rotation of the first. 

// Would you change your implementation if you knew that the two were
// usually entirely unrelated?


function isRotation( str1, str2) {
    if ( str1.length != str2.length) {
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return (str2 + str2).includes(str1)? true : false;
}

console.log(isRotation("abcdef", "defabc"));        // true
console.log(isRotation("abc", "abdef"));            // false
