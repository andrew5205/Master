

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

