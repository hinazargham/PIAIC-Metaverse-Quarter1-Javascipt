// Basic Syntax of Async Functions
// Always return a promise
// when we use await operator with async function
// await returns promise resolved value

// async function myFunction() {

// }

// Example 1
const myPromise = new Promise((resolve, reject) => {
    resolve("I am resolved")
})

async function myFunction() {
    const resolvedValue = await myPromise;
    console.log(resolvedValue);
}
myFunction();