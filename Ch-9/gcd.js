
// Greatest Common Divisor

// Eulidean Algorithm
// If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.  
// If B = 0 then GCD(A,B)=A, since the GCD(A,0)=A, and we can stop.
// Write A in quotient remainder form (A = B⋅Q + R)
// Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)

// GCD(A, B) = GCD(B, A-B)


function gcd(x, y) {
    if ( x == 0 || y == 0) {
        return ("please enter vaild number");
    }

    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(gcd(270, 192));     // 6
console.log(gcd(192, 270));     // 6
console.log(gcd(15, 0));        // please enter vaild number

// ******************************************* // 

function gcdRecursion(a, b) {
    while ( !b ) {
        return a;
    }
    return (gcdRecursion(b, a%b));
}

console.log(gcdRecursion(270, 192));
console.log(gcdRecursion(192, 270));


// ******************************************* // 
function gcdT(m, n) {
    return ( !n ) ? m : gcdT(n, m%n);
}

console.log(gcdT(270, 192));
console.log(gcdT(192, 270));



// ******************************************* // 
let a = 0;
let b = 20;
console.log(0);     // 0
console.log(!a)     // true 
console.log(!b);    // false
console.log(!0);    // true
