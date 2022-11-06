// Practice exercise 6.6

function factorial(nr) {
    console.log(nr)
    if ( nr === 0) {
        return 1
    } else {
        return nr * factorial(--nr)
    }

}
console.log("Factorial of 3 = " + factorial(3))