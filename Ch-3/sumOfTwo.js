
// Sum of two

// From a unsorted array, 
// check whether there are any two numbers that will sum up to a given number?


function sumOfTwo(arr, num) {
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = i+1; j < arr.length; j++) {
            if ( arr[i] + arr[j] == num) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfTwo([1,2,3,4,5,6,7,8,9], 7));
console.log(sumOfTwo([1,2,3,4,5,6,7,8,9], 20));