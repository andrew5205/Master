
// bubble sort move unsorted array in-place
// O(N ^2) = O(N * N)

function bubble_Sort(arr){

    var i, j;
    var temp;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i; j++) {    // biggest moved to the far right, no need to check again
            if ( arr[j] > arr[j+1] ) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));           // [-1, 0, 1, 2, 3, 4, 5]



// **************************************************************************** // 
function swap(arr, i , j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){

    var i, j, stop;

    //  stop = arr.length - i    // biggest moved to the far right, no need to check again 
    for (i = 0; i < arr.length; i++) { 
        for (j = 0, stop = arr.length - i; j < stop; j++) { 
            if ( arr[j] > arr[j+1] ) {
                swap( arr, j, j+1 );
            }
        }
    }

    return arr;
}
console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));        // [-1, 0, 1, 2, 3, 4, 5]



// *************************** ES6 destructuring  ************************************************************** // 
function bubble_Sort_Destructuring(arr){

    var i, j;
    var temp;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i; j++) {    // biggest moved to the far right, no need to check again
            if ( arr[j] > arr[j+1] ) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];        // ES6 destructuring
            }
        }
    }

    return arr;
}
console.log(bubble_Sort_Destructuring([3, 0, 2, 5, -1, 4, 1]));           // [ -1, 0, 1, 2, 3, 4, 5 ]


// ******************************    recursion       **************************************** // 
// Time complexity: O(n ^ 2)
// Space complexity: O(n)

function bubbleSortRecursion(arr, n = arr.length) {
    if ( n == 1 ) {
        return arr;
    }

    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] > arr[i+1] ) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    // recursive call on smaller portion of arr
    return bubbleSortRecursion(arr, n-1);
}

console.log(bubbleSortRecursion([3, 0, 2, 5, -1, 4, 1]));



// **************************************************************************** // 
function bubble_Sort_Left(arr) {

    var i, j;
    var temp;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i; j++) {    // biggest moved to the far right, no need to check again
            if ( arr[j] < arr[j+1] ) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}
console.log(bubble_Sort_Left([3, 0, 2, 5, -1, 4, 1]));      // [5, 4, 3, 2, 1, 0, -1 ]












