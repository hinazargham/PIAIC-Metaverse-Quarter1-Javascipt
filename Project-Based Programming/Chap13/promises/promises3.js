/*

We first create a Promise. When creating a Promise , we don't know what the value of the Promise is going
to be. This value is whatever is sent as an argument to the resolve function. It is a sort of placeholder.
So when we call then on the Promise, we basically say: figure out what the value of the Promise is, 
and when you know, execute one function if the Promise was resolved or a different function if it 
was rejected. When a Promise is neither resolved nor rejected, we say that the Promise is pending. 
then() is a Promise itself, so when it returns we can use the result for the next instance.
This means we can chain the then() instances, which can look like this:

*/



const promise = new Promise((resolve, reject) => {
    resolve("success!");
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

// The resolve functions are implemented with an arrow function. The return statement is the input 
// for the next function. You can see that the last block is a function.