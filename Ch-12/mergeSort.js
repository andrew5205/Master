

// Mergesort is a general purpose sorting algorithm that adopts a divide and conquer approach.
// sometimes used internally by JavaScript with Array.prototype.sort().
// O (N log N)

function merge(left, right) {
    let arr = [];

    while ( left.length && right.length) {
        if ( left[0] < right[0] ) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left).concat(right);
}

function mergeSort(arr) {
    if ( arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([9,3,6,2,4,5,7,1,8,10]));
// ****************************************************************************** //



// function mergeSort(arr){
//     if( arr.length <2)    
//         return arr;
//     var mid = Math.floor(arr.length/2),
//         left = arr.slice(0,mid),
//         right =arr.slice(mid);
//     //send left and right to the mergeSort to broke it down into pieces
//     //then merge those
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left, right){
//     var result = [],    
//         l = 0,
//         r = 0;
//     while(l < left.length && r < right.length){
//         if(left[l] < right[r]){
//             result.push(left[l++]);    
//         } else {
//             result.push(right[r++]);    
//         }
//     }  
//     //remaining part needs to be addred to the result
//     return result.concat(left.slice(l)).concat(right.slice(r));
// }


// console.log(mergeSort([6,5,3,1,8,7,2,4]));


// // ****************************************************************************** //
