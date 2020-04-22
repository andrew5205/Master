
// Find Intersection

// Have the function FindIntersection(strArr) read the array of strings stored in strArr 
// which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, 
// the second element will represent a second list of comma-separated numbers (also sorted). 
// Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
// If there is no intersection, return the string false.


// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

function FindIntersection(strArr) { 


    var arr0 = strArr[0].split(', ');
    var arr1 = strArr[1].split(', ');
    strArr = [];
    
    for (var i = 0; i < arr0.length; i++) {
        if (arr1.indexOf(arr0[i]) != -1) {
        strArr.push(arr0[i]);
        }
    }
    
    if (strArr.length === 0) {
        return 'false';
    }
    
    return strArr.join(',');
    
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

// ******************************************************************* // 

const arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log(arr[0].split(', '));    // [ '1', '3', '4', '7', '13' ]
console.log(arr[0]);                // 1, 3, 4, 7, 13

console.log(arr[1].split(', '));    // [ '1', '2', '4', '13', '15' ]
console.log(arr[1]);                // 1, 2, 4, 13, 15

console.log(typeof(arr[0]));        // string 


