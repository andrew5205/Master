
// String encod

// You are given a string that may contain sequences of consecutive characters. 
// Create a function to shorten a string by including the character, 
// then the number of times it appears. 

// For "aaaabbcddd", return "a4b2c1d3". 
// If result is not shorter (such as "bb"=>"b2"), return the original string.

function strEncode(str) {
    if ( str.length == 0) {
        return "please enter valid string";
    }
    let count = 0;
    let newStr = "";
    for ( let i = 0; i < str.length; i++) {
        count++;
        if ( str[i] != str[i+1]) {
            newStr += str[i] + count;
            count = 0;
        }
    }
    return newStr.length < str.length ? newStr: str;
} 


console.log(strEncode(""));             // please enter valid string 
console.log(strEncode("abcd"));         // abcd
console.log(strEncode("aabbcccaa"));    // a2b2c3a2
console.log(strEncode("AABBCCCAA"));    // A2B2C3A2


// ***************************************************************************** //


function strEncode2(str) {
    let dict = {};
    let newStr = "";
    for ( let i = 0; i < str.length; i++) {
        if ( dict[str[i]]) {
            dict[str[i]]++;
        } else {
            dict[str[i]] = 1;
        }
    }

    for ( k in dict) {
        newStr += k + dict[k];
    }

    return newStr.length < str.length ? newStr : str;
}


console.log(strEncode2("abcd"));            // abcd
console.log(strEncode2("aabbccc"));         // a2b2c3
console.log(strEncode2("aabbcccaa"));       // a4b2c3
