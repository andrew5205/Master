
// Longest Word


// Create a function that, given a string of words, returns the longest word. 

// Example: given "Snap crackle pop makes the world go round!", 

// return "crackle".


function longestWord(str) {
    let output = "";
    let arr = str.split(" ");
    let maxIndex = 0;
    for ( let i = 1; i < arr.length; i++) {
        if ( arr[i].length > arr[maxIndex].length) {
            maxIndex = i;
        }
    }
    return (arr[maxIndex]);
}

console.log(longestWord("Snap crackle pop makes the world go round!"));

