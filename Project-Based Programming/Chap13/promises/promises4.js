// If any of the functions were to result in a rejection and the Promise were therefore rejected, 
// this catch() block would be executed and print whatever the reject() function sent to the
// catch() method. For example:

const promise = new Promise((resolve, reject) => {
    reject("oops... ");
})
.then(value => {
    console.log(value);
    return "we";
})
.then(value => {
    console.log(value);
    return "can";
})
.then(value => {
    console.log(value);
    return "chain";
})
.then(value => {
    console.log(value);
    return "promises";
})
.then(value => {
    console.log(value);
})
.catch(value => {
    console.log(value);
})

// This will just log oops... because the first Promise was rejected instead of resolved. 
// This is great for creating asynchronous processes that need to wait till another process is complete. 