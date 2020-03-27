
// Reverse Word Order

// Create a function that, given a string of words(with spaces), 
// returns new string with words in reverse sequence. 
// Given "This is a test", return "test a is This".


// ************************************************************* //
// str --> arr --> reverse arr --> join 

function reverseWordOrder(str) {
    let newStr = str.split(" ").reverse().join(" ");
    return newStr;
}

console.log(reverseWordOrder("This is a test"));
