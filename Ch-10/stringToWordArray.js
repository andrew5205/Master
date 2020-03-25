
// String to Word Array

// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. 
// Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].

// indexOf()        --> -1 
// charCodeAt()     --> 32 == space 



function stringToWordArray(str) {
    let arr = [];
    while ( str.indexOf(" ") != -1) {                   // if index of the space exist
        arr.push(str.substring(0, str.indexOf(" ")));
        str = str.substring(str.indexOf(" ") + 1);
    }
    arr.push(str);      // push for the last word in string
    return arr;
}

console.log(stringToWordArray("Life is not a drill!"));     // [ 'Life', 'is', 'not', 'a', 'drill!' ]



// ******************************************************************************* //

function stringToWordArray2(str) {
    let output = [];
    for ( let i = 0; i < str.length; i++) {
        if ( str.charCodeAt(i) == 32) {
            output.push(str.substring(0, i));
            str = str.substring(i+1);
            i = 0;
        }
    }
    output.push(str);
    return output;
}

console.log(stringToWordArray2("Life is not a drill!"));        // [ 'Life', 'is', 'not', 'a', 'drill!' ]
