
// Num to String 

// Create a function that converts a number into a string containing those exact numerals. For example,
// given 1234, return the string "1234". 
// No, you may not use the toString() function.



function numToStr(num) {
    let newStr = "";
    while ( num > 0) {
        newStr = num % 10 + newStr;
        num = Math.floor(num / 10);
    }
    return newStr;
}

console.log(numToStr(1234567));
console.log(typeof(numToStr(1234567)));
