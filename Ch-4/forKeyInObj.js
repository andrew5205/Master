

// For the JavaScript FOR...IN, always think of it as FOR (key IN obj).
// The loop iterator represents keys, not values. 
// If you need to iterate values within an object, 
// then within a FOR (key IN obj) loop, reference obj[key].



// Associative Array: Number of Values (without .length)


// for object { band: "Travis Shredd & the Good Ol’ Homeboys", style:
// "Country/Metal/Rap", album: "668: The Neighbor of the Beast" }, 
// you should return the value 3, because there are three keys in this object: band, style and album.


function objectCount(obj) {
    var count = 0;
    for ( key in obj) {
        if ( obj[key] != null) {
            count++;
        }
    }
    return count;
}

var givenObj = { band: "Travis Shredd & the Good Ol’ Homeboys", style: "Country/Metal/Rap", album: "668: The Neighbor of the Beast" };
console.log(objectCount(givenObj));


// ********************************************************************************************* //

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let example = {
    key1: "val1",
    key2: "val2",
    key3: "val3",
    key4: "val4",
    key5: "val5",
}

console.log(Object.keys(example));      // [ 'key1', 'key2', 'key3', 'key4', 'key5' ]
console.log(Object.values(example));    // [ 'val1', 'val2', 'val3', 'val4', 'val5' ]
console.log(Object.entries(example));
// [
//     [ 'key1', 'val1' ],
//     [ 'key2', 'val2' ],
//     [ 'key3', 'val3' ],
//     [ 'key4', 'val4' ],
//     [ 'key5', 'val5' ]
// ]



// ********************************************************************************************* //
console.log("// ********* obj order ********  //");
// Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

let exampleOri = {
    v1: "val1",
    v2: "val2",
    v3: "val3",
    v6: "val6",
    v4: "val4",
    v5: "val5",
}

let exampleSorted = Object.entries(exampleOri).sort( (a,b) => a[0].localeCompare(b[0]));
console.log(Object.keys(exampleSorted));        // [ '0', '1', '2', '3', '4', '5' ]

console.log(Object.values(exampleSorted));
// [
//     [ 'v1', 'val1' ],
//     [ 'v2', 'val2' ],
//     [ 'v3', 'val3' ],
//     [ 'v4', 'val4' ],
//     [ 'v5', 'val5' ],
//     [ 'v6', 'val6' ]
// ]


console.log(Object.entries(exampleSorted));

// [
//     [ '0', [ 'v1', 'val1' ] ],
//     [ '1', [ 'v2', 'val2' ] ],
//     [ '2', [ 'v3', 'val3' ] ],
//     [ '3', [ 'v4', 'val4' ] ],
//     [ '4', [ 'v5', 'val5' ] ],
//     [ '5', [ 'v6', 'val6' ] ]
// ]

// ************************************************************************** //
console.log("// ********* obj order II ********  //");
// let exampleSorted = Object.entries(exampleOri).sort( (a,b) => b[0].localeCompare(a[0]));
console.log(Object.keys(exampleSorted));        // [ '0', '1', '2', '3', '4', '5' ]

console.log(Object.values(exampleSorted));
// [
//     [ 'v6', 'val6' ],
//     [ 'v5', 'val5' ],
//     [ 'v4', 'val4' ],
//     [ 'v3', 'val3' ],
//     [ 'v2', 'val2' ],
//     [ 'v1', 'val1' ]
// ]

console.log(Object.entries(exampleSorted));
// [
//     [ '0', [ 'v6', 'val6' ] ],
//     [ '1', [ 'v5', 'val5' ] ],
//     [ '2', [ 'v4', 'val4' ] ],
//     [ '3', [ 'v3', 'val3' ] ],
//     [ '4', [ 'v2', 'val2' ] ],
//     [ '5', [ 'v1', 'val1' ] ]
// ]





