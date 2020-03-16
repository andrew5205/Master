

// Write a function that returns whether the given array has a balance point between indices,
// where one side’s sum is equal to the other’s.
// Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.


function balancePoint(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var partialSum = 0;
    for(var i = 0; i < arr.length - 1; i++) {
        partialSum += arr[i];
        if( partialSum == ( sum - partialSum)) {
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([1,2,4,2,1]));
console.log(balancePoint([11,1,2,3,4,10,1]));
