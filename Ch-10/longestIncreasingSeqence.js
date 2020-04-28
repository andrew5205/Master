

// [9, 9, 4, 2] => 1

// [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42] => 5 


// for an given Array, 
// return the number of longest increasing sequence 


function longestSeq(arr) {
    let count = 1; 
    let currentMax = 0;

    if (!arr.length) {
        return "Please enter a valid array";
    }

    for ( let i = 0; i < arr.length; i++) {

        if ( arr[i] > arr[currentMax] ) {
            currentMax = i;
            count++;
        }
    }
    return count;
}

console.log(longestSeq([9, 9, 4, 2]));      // 1
console.log(longestSeq([-10, 23, 8, 9, 36, 21, 56, 39, 75, 99]));        //6
console.log(longestSeq([]));        // Please enter a valid array







