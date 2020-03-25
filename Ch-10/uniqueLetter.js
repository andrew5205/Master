
// Unique Letters

// Return only the unique characters from a given string. Specifically, 
// omit all instances of a (casesensitive) character if it appears more than once, 
// respecting spaces and punctuation. 
// Given "Snap! Crackle! Poop!", return "SnCrckleP".


function uniqueLetter(str) {
    let newStr = "";
    let dict = {};
    // let modStr = str.replace(/[\W_]/g,"");
    for ( let i = 0; i < str.length; i++) {
        if ( dict[str[i]]) {
            dict[str[i]]++;
        } else {
            dict[str[i]] = 1;
        } 
    }

    for ( k in dict) {
        if (dict[k] == 1) {
            newStr += k;
        }
    }
    return newStr;
}
console.log(uniqueLetter("Snap! Crackle! Poop!"));


