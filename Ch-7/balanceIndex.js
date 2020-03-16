

// Here, a balance point is on an index, notbetween indices. 
// Return the balance index where sums are equal on either side (exclude its own
// value). Return -1 if none exist. 
// Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.


function balanceIndex(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var partialSum = arr[0];
    for(let i = 1; i < arr.length - 1; i++) {
        if( partialSum == ( sum - partialSum - arr[i] )) {
            return i;
        }
        partialSum += arr[i];
    }
    return -1;
}

console.log(balanceIndex([-2,5,7,0,3]));
console.log(balanceIndex([1,1,1,1,1,2]));
console.log(balanceIndex([2,1,2,1]));