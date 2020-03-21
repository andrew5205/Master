
// List 

// 1.
// O(1) — “Order 1”
// 2.
// O(N) — “Order N”
// 3.
// O(N^2 ) — “Order N squared”
// 4.
// O(n log n) — “Order N log N”


// ************************************************************************************************* // 

// O(1) - Time to complete is the same regardless of the size of input set. An example is accessing an array element by index.

// O(Log N) - Time to complete increases roughly in line with the log2(n). 
// For example 1024 items takes roughly twice as long as 32 items, because Log2(1024) = 10 and Log2(32) = 5. 
// An example is finding an item in a binary search tree (BST).

// O(N) - Time to complete that scales linearly with the size of the input set. 
// In other words if you double the number of items in the input set, the algorithm takes roughly twice as long. 
// An example is counting the number of items in a linked list.

// O(N Log N) - Time to complete increases by the number of items times the result of Log2(N). 
// An example of this is heap sort and quick sort.

// O(N^2) - Time to complete is roughly equal to the square of the number of items. 
// An example of this is bubble soroh t.

// O(N!) - Time to complete is the factorial of the input set. An example of this is the traveling salesman problem brute-force solution.

// ************************************************************************************************* // 


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
        // double-count will bring NO ending point
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

console.log(quickSort([77,23,3,35,101,8,23,15,32,55]));
// [ 3,  8, 15, 23,  23, 32, 35, 55, 77, 101]

// **************************************************************************** // 

function quickSort2(arr) {
    if ( arr.length < 2) {
        return arr;
    }

    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for ( var i = arr.length-1 -1; i >= 0; i--) {
        // starting point double-count will cause nothing to sort, 
        // and turns out NO ending point
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        } 
    }
    return quickSort2(left).concat(pivot, quickSort2(right));
}
console.log('*************** quickSort2 ***********');
console.log(quickSort2(['q','a','z','w','s','x','e','d','c','r']));      
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]

console.log(quickSort2([77,23,3,35,101,8,23,15,32,55]));
// [ 3,  8, 15, 23,  23, 32, 35, 55, 77, 101]




