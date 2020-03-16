
// Selection sort is a very simple, comparison algorithm that runs in O(n²) time


// The idea behind selection sort is that you loop through the input array linearly, 
// selecting the first smallest element, and then swap it to the first position. 
// Then you loop through the array again using a linear scan and get the second smallest element, 
// swap it to the second position, and so on and so forth until your array is completely sorted.


function selectionSort(arr) {
    var i, j;
    for ( i = 0; i < arr.length; i++) {     // loop thru whole array

        var minIndex = i;
        for ( j = i + 1; j < arr.length; j++) {     // find index of min element 
            if ( arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        var temp = arr[i];                          // move the min to the front 
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

let testArr = [19, 5, 6, 14, 67, 36, 17, 34];
selectionSort(testArr);
console.log(testArr);


// ******************************************************* // 
// think as each cheking in group of two j, j+1

// selection sort, but max to the left 
function selectionSort_Max_to_Left(arr) {
    var i, j;
    for ( i = 0; i < arr.length; i++) {
        var maxIndex = i;
        for ( j = i + 1; j < arr.length; j++) {
            if ( arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
    return arr;
}

let testArr2 = [19, 5, 6, 14, 67, 36, 17, 34];
selectionSort_Max_to_Left(testArr2);
console.log(testArr2);

