
//  Rotate String 

// Create a standalone function that accepts a string and an integer, 
// and rotates the characters in the string to the right by that amount. 
// Example: given ("Boris Godunov",5), you should
// return "dunovBoris Go".


// **********************    standalone func  ************************** // 

function rotateStr(str, num) {

    let newNum = str.length - num;
    let output = "";
    let index = 0;

    for ( let i = 0; i < str.length; i++) {
        index = ( i + newNum) % str.length;
        output += str[index];
    }
    return output;
}

console.log(rotateStr("abcde",3));              //cdeab
console.log(rotateStr("Boris Godunov",5));      //dunovBoris Go





// ***************   using slice()   ********************************** //
function rotateString(str, int) {
    let newStr = str + str;
    let output = "";

    return ( output = newStr.slice(str.length-int, newStr.length-int));

}

console.log(rotateString("Boris Godunov", 5));      //dunovBoris Go

// len = 13 
// int = 5 
// len - int = 8
//          9           21
// Boris Go dunovBoris Go dunov




