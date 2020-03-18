
// List 

// 1.
// O(1) — “Order 1”
// 2.
// O(N) — “Order N”
// 3.
// O(N^2 ) — “Order N squared”
// 4.
// O(n log n) — “Order N log N”


// Brief:
// Big-O describes worse-case performance (“performance will never be any worse than …”); 

// Big-Omega best-case (“in the ideal situation, performance might be as good as …”);

// Big-Theta average case (“on average across a broad range of inputs, performance will be …”).


// big-O
// how their running time or space requirements grow as the input size grows
// The letter O is used because the growth rate of a function is also referred to as the order of the function

// ************************************************************************************************* // 

// O(1) < O(log N) < O(n) < O(N log N) < O(N^2) < O(2^N) < O(n!)

// ************************************************************************************************* // 
// 1.
// O(1) — “Order 1”
// On this order, regardless of the complexity (number of items), the time (iterations) is constant.

const getLast = items => items[items.length - 1];


var arr = ['a', 'b', 'c', 'd'];
console.log(getLast(arr));  //d

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(getLast(arr2));     // g


// ************************************************************************************************* // 
// 2.
// O(N) — “Order N”
// In this order, the worst case time (iterations) grows on par with the number of items.
// In other words, for N elements we will require N iterations.

function findIndex(arr, match) {
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] == match) {
            return i;
        }
    }
    return -1;
}

const array= ['a', 'b', 'c', 'd'];
console.log(findIndex(array, 'a')); // 0  (1 iteration - best case)
console.log(findIndex(array, 'd')); // 3  (4 iterations - worst case)
console.log(findIndex(array, 'e')); // -1 (4 iterations - worst case)


// ************************************************************************************************* // 
// 3.
// O(N 2 ) — “Order N squared”
// Quadratic-Time Algorithm
// worst case time (iterations) is the square of the number of inputs. 
// The time grows exponentially related to the number of inputs.

function buildSquareMatrix(arr) {
    var matrix = [];
    for ( var i = 0; i < arr.length; i++) {
        matrix[i] = [];

        for ( var j = 0; j < arr.length; j++) {
            matrix[i].push(arr[j]);
        }
    }
    return matrix;
}

console.log(buildSquareMatrix([1,2,3]));

// [ 
//     [ 1, 2, 3 ], 
//     [ 1, 2, 3 ], 
//     [ 1, 2, 3 ] 
// ]


// ************************************************************************************************* // 
// 4.
// O(n log n) — “Order N log N”

// They are usually the most efficient approach when dealing with large collections
// Instead of looking through the components one by one, they split the data in chunks 
// and discard a large amount on every iteration, usually the half, or log base 2.

function quickSort(arr) {
    if ( arr.length < 2) {
        return arr;
    }

    var pivot = arr[0];
    var left = [];
    var right = [];
    for ( var i = 1; i < arr.length; i++) {
        // i = 0, Maximum call stack size exceeded
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        } 
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(['q','a','z','w','s','x','e','d','c','r']));      
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]


