
// binary search O(log N)

// Given a sorted array and a value, return whether the array contains that value. 
// Do not sequentially iterate the array. 
// Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. 
// As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

// var array = [1,2,3,4,5,6,7,8,9,10];


var array = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr, element) {

        var start = 0;
        var end = arr.length - 1;
        var mid = Math.floor((start + end) / 2);

        // edge case 
        if ( arr[mid] == element) {
            return arr[mid];
        }

        while ( arr[mid] != element && start <= end) {
            if ( arr[mid] < element) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
            mid = Math.floor((start + end) / 2);
        }
        return arr[mid] == element? true : false;
}

console.log(binarySearch(array, 4));
console.log(binarySearch(array, 11));


// ********************   using recursion   *********************** //
console.log( "********* recursion ***************")

function binarySearchRec(arr, num) {
    let mid = Math.floor(arr.length / 2);

    if ( !arr.length ) {
        return -1;
    }
    
    while (arr.length > 0) {
        
        if ( arr[mid] == num) {
            return arr[mid];
        }

        if ( arr[mid] > num ) {
            arr = arr.slice(0, mid);
            return binarySearchRec(arr, num);
        }
        
        else if ( arr[mid] < num ) {
            arr = arr.slice(mid+1, arr.length);
            return binarySearchRec(arr, num);
        }
    }

}

console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],10));    // 10 
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],2));     // 2 
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],15));    // -1


// ********************   using recursion  splice  *********************** //
console.log( "********* splice ***************")

function binarySearchRec(arr, num) {
    let mid = Math.floor(arr.length / 2);

    if ( !arr.length ) {
        return -1;
    }
    
    while (arr.length > 0) {
        
        if ( arr[mid] == num) {
            return arr[mid];
        }

        if ( arr[mid] > num ) {
            arr = arr.splice(0, mid);
            return binarySearchRec(arr, num);
        }
        
        else if ( arr[mid] < num ) {
            arr = arr.splice(mid+1);
            return binarySearchRec(arr, num);
        }
    }

}

console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],10));    // 10 
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],2));     // 2 
console.log(binarySearchRec([1,2,3,4,5,6,7,8,9,10],15));    // -1



console.log([1,2,3,4,5,6,7].splice(3));     //[ 4, 5, 6, 7 ]
