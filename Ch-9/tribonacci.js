// Tribonacci 


// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
// First three Tribonacci numbers are 0, 0, 1, 
// so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). 
// Handle negatives and non-integers appropriately and inexpensively.

function tribonacci(num) {
    var arr = [ 0, 0, 1];
    for ( var i = 3; i <= num; i++) {
        arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
    }
    return arr;
}
console.log(tribonacci(5));



function rTribonacci(num) {
    if (num <= 1) {
        return 0;
    } 
    if (num == 2) {
        return 1;
    } else {
        return rTribonacci(num - 3) + rTribonacci(num - 2) + rTribonacci(num - 1);
    }
}
console.log(rTribonacci(5));




// using dict obj 
function rTrib(num) {
    dict = {0:0, 1:0, 2:1}
    if(num <= 1) {
        return 0
    }
    if(num == 2) {
        return 1
    }
    // return rTrib(num-3) + rTrib(num-2) + rTrib(num-1) 
    for(var i = 3; i <= num; i++) {
        dict[i] = dict[i-3] + dict[i-2] + dict[i-1]
    }
    // console.log(dict)
    return dict[num]
}
console.log(rTrib(5));




