// Factorial

// Given num, return the product of ints from 1 up to
// num. If less than zero, treat as zero. If not integer,
// truncate. Experts tell us 0! is 1. rFact(3) = 6
// (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function factorial(num) {
    if ( num < 2) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(3));
console.log(factorial(4));


function rFactorial(num) {
    return (num < 2) ? num : num * rFactorial(num - 1);
}
console.log(rFactorial(3));
console.log(rFactorial(4));