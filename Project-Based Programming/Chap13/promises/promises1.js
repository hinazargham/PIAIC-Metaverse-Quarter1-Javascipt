/* Syntax
const promise = new Promise(function(resolve, reject) { // two parameters resolve and reject

    // Execution
});

promise.then(function(result) {
    // On success
} , function (error){
    // On Error
})
*/

const promise = new Promise(function(resolve, reject) { // two parameters resolve and reject
    resolve('from Example1: Javascript')
});
promise.then(function(result) {
    console.log("Success: ", result);
} , function (error){
    console.log("Error: ", error);

})

const promise2 = new Promise(function(resolve, reject) { // two parameters resolve and reject
    reject('from Example2: Javascript')
});
promise2.then(function(result) {
    console.log("Success: ", result);
} , function (error){
    console.log("Error: ", error);

})

const promise3 = new Promise(function(resolve, reject) { // two parameters resolve and reject
    reject('from Example3: Javascript')
});
promise3.then(function(result) {
    console.log("Success: ", success);
}).catch(function(error){
    console.log("Error: ", error);

})

