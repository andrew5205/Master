
// String Decode

// Given an encoded string (see above), decode and return it. 
// Given "a3b2c1d3", return "aaabbcddd".

// .match(/\d+/)        // match with digits 


function stringDecode(str){
    var output = "";

    if ( str.length == 0) {
        return ("please enter a valid string")
    }

    while( str.length) {
        var iter = str.match(/\d+/);        // get digits/ numbers  --> \d
                                            // \d+ more then one digit
        for( var i = 0; i < iter; i++) {    // iterate thru each iter 
            output += str[0];               // modify output character 
        }
        str = str.substring(1);             // remove executed charactor from string 

        while( parseInt(str)) {             // remove digits of executed character from string 
            str = str.substring(1);         // 
        } 
    }
    return output;
}

console.log(stringDecode(""));                  // please enter a valid string
console.log(stringDecode("a3b2c1d3"));          // aaabbcddd
console.log(stringDecode("a1b2c3d4a2"));        // abbcccddddaa
console.log(stringDecode("a11b4c5"));           // aaaaaaaaaaabbbbccccc
console.log(stringDecode("a11b10c5"));          // aaaaaaaaaaabbbbbbbbbbccccc

