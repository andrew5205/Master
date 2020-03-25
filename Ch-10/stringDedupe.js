// each character. 

// Given "Snaps! crackles! pops!", return "Snrackle ops!".



function strDedupe(str) {
    let dict = {};
    let output = "";
    for ( i = str.length-1; i >= 0; i-- ) {
        if ( !dict[str[i]]) {
            dict[str[i]] = true;
            output = str[i] + output;
        } 
    }
    return output;
}

console.log(strDedupe("Snaps! crackles! pops!"));           // Snrackle ops!




// **************************   using include()    ******************************* //

function stringDedupe(str) {
    let newStr = "";
    for ( let i = str.length-1; i >= 0; i--) {
        if ( !newStr.includes(str[i])) {
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}

console.log(stringDedupe("Snaps! crackles! pops!"));        // Snrackle ops!




