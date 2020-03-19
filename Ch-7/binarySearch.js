
// binary search O(log N)

// Given a sorted array and a value, return whether the array contains that value. 
// Do not sequentially iterate the array. 
// Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. 
// As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

var array = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr, element) {

        var start = arr[0];
        var end = arr[arr.length - 1];
        var mid = Math.floor((start + end) / 2);

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

console.log(binarySearch(array, 7));



