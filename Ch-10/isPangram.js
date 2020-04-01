

// Is Pangram

// Return whether a string contains all letters in theEnglish alphabet (upper or lower case). 
// For "How quickly daft jumping zebras vex", return true. 
// For "abcdef ghijkl mno pqrs tuv wxy, not so fast!", return false



function isPangram(str) {
    str= str.toLowerCase().split(" ").join("");
    for ( let i = 0; i < str.length; i++) {
        if ( str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("How quickly daft jumping zebras vex"));
console.log(isPangram("abwxy, not so fast!"));
