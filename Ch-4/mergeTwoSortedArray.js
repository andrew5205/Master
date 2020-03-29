
// Merge two sotred array 

function mergeArray( arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3.sort();
    // return arr1.concat(arr2).sort();
}

console.log(mergeArray([1,2,3,4,5], [2,4,6,8,9]));  // // [ 1, 2, 2, 3, 4, 4, 5, 6, 8, 9 ]


// ********************************************** //

function mergeTwo(arr1, arr2) {
    let output = [];
    let i = 0;
    let j = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {

        if (arr1[i] < arr2[j]) {
            output[current] = arr1[i];
            i++;
        } else {
            output[current] = arr2[j];
            j++;
        }
        current++;
    }
    return output;
}

console.log(mergeTwo([1,2,3,4,5], [2,4,6,8,9]));    // [ 1, 2, 2, 3, 4, 4, 5, 6, 8, 9 ]




