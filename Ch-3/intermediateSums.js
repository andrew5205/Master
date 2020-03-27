
// intermediate sums 

// You will be given an array of numbers. 

// After every tenth element,  add an additional element containing the sum of those five values. 

// If the array does not end aligned evenly with five elements, 
// add one last sum that includes those last elements not yet been included in one of the earlier sums. 
// Given the array [1,2,3,4,5,1,2,3,4,5,1,2,3], 
// change it to [1,2,3,4,5,15,1,2,3,4,5,15,1,2,3].
j


function intermediateSums(arr){
    var count = 0;
    var sum = 0;
    for ( var i = 0; i < arr.length; i++) {
        count++;
        sum += arr[i];
        if ( count == 5 ){
            // copy all element after i to i+1, 
            for (var j = arr.length-1; j >= i; j--) {
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            count = 0;
            sum = 0;
            i++;
        }
    }
    if (sum > 0){
        arr[arr.length] = sum;
    }
    return arr;
}
console.log(intermediateSums([1,2,3,4,5,1,2,3,4,5,1,2,3]));

// [
//     1, 2, 3, 4, 5, 15,
//     1, 2, 3, 4, 5, 15,
//     1, 2, 3, 6
// ]


// ************************************************** // 
// sfift array to left 
function shiftToLeft(arr) {
    for ( let i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop();
    // console.log(arr);
    return arr;
}
// shiftToLeft([1,2,3,4,5]);                // [ 2, 3, 4, 5 ]
console.log(shiftToLeft([1,2,3,4,5]));      // [ 2, 3, 4, 5 ]


// ************************************************** // 
// shift array to right 
function shiftToRight(arr) {
    for ( let j = arr.length -1; j >= 0; j--) {
        arr[j+1] = arr[j];
    }
    return arr;
}

console.log(shiftToRight([9,8,7,6,5,4,3]));     // [9,9,8,7,6,5,4,3]


