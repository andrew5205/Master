// Sigma

// Write a recursive function that given a number
// returns sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5);
// rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function sigma(num) {
    if( num < 1 ) {
        return 0;
    } else {
        return num + sigma(num-1);
    }
}

console.log(sigma(4));
console.log(sigma(3));


function rSigma(num) {
    return (num < 1) ? 0 : num + rSigma(num - 1);
}
console.log(rSigma(4));
console.log(rSigma(3));