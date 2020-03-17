
// quick sort 

// 1. find pivot 
// 2. partition base on pivot 
// 3. concat recursive leftArr, pivot, rightArr


function quickSort(array) {
    if( array.length <=1 ) {
        return array;
    }
    // select first element as pivot 
    var pivot = array[0];
    var left = [];
    var right = [];
    // partition left, right 
    for ( var i = 1; i < array.length; i++) {
        if ( array[i] > pivot ) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }
    // concat recursive left, pivot, right 
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([3, 0, 2, 5, -1, 4, 1 ]));


// **************************************************************** //
// need modification output 
function quickSort1(array) {
    if( array.length <=1 ) {
        return array;
    }
    // select first element as pivot 
    var pivot = array[0];
    var left = [];
    var right = [];
    var newArr = [];
    // partition left, right 
    for ( var i = 1; i < array.length; i++) {
        if ( array[i] > pivot ) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
        newArr = quickSort1(left) + pivot + quickSort1(right);
    }
    // concat recursive left, pivot, right 
    // return quickSort(left).concat(pivot, quickSort(right));
    return newArr;
}

console.log(quickSort1([3, 0, 2, 5, -1, 4, 1 ]));       // -1012345



// // **************************************************************** //

// // arr = [1,2,3];
// // newArr = [];
// // console.log(arr.pop());
// // console.log(newArr.push('1', '2'));     // return the length of newArr 
// // console.log(newArr.push(arr[0]));


// // **************************************************************** //
// // some other method 
// function quick_Sort(origArray) {
//     if (origArray.length <= 1) { 
//         return origArray;
//     } else {

//         var left = [];
//         var right = [];
//         var newArray = [];
//         var pivot = origArray.pop();
//         var length = origArray.length;

//         for (var i = 0; i < length; i++) {
//             if (origArray[i] <= pivot) {
//                 left.push(origArray[i]);
//             } else {
//                 right.push(origArray[i]);
//             }
//         }

//         return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
//     }
// }

// var myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);
