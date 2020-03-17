//  Invert Hash 

// Associative arrays are also called hashes (we’ll learn why later). 
// Build invertHash(assocArr) to convert hash keys to values, 
// and values to keys. 
// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"},
// return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.


function invertHash(obj) {

    // var newObject = new Object();

    var newObject = {};
    for ( key in obj) {
        newObject[obj[key]] = key;
    }
    return newObject;
}

var givenObj = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
console.log(invertHash(givenObj));

// { Zaphod: 'name', high: 'charm', dicey: 'morals' }

