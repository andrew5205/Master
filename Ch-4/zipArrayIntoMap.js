
// Zip Array Into Map

// Associative arrays are sometimes called maps because a key (string) maps to a value. 
// Given two arrays, create an associative array (map) containing keys of the first, and values of the
// second. 
// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return
// {"abc": 42, 3: "wassup", "yo": true}.


function zipArrayIntoMap(arr1, arr2) {
    var obj = {};
    if (arr1.length != arr2.length) {
        return ("two array are not same length");
    }
    for ( var i = 0; i < arr1.length; i++) {
        if ( !obj[arr1[i]]) {
            obj[arr1[i]] = arr2[i];
        }
    }
    return obj;
}

// order in object is not guaranteed

arr1 = ["abc", 3, "yo"]
arr2 = [42, "wassup", true]
console.log(zipArrayIntoMap(arr1, arr2));


// for ( key in obj)  


