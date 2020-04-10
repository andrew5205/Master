
// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
// It is much less efficient on large lists

// O(N^2)

function insertionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var j = i-1;

        while( j >= 0 && arr[j] > current) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));


// ********************************************************************************** //
function insertionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var j = i-1;

        while( j >= 0 && arr[j] > current) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));











