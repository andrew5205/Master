
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

