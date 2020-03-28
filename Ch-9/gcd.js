
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





