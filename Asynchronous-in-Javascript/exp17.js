// Sometimes you have multiple asynchronous tasks to perform and you have to start something 
// when every task is done. When using promises, you can do that with Promise.all.
// Run the following code to understand the basics of it.

function job(delay) { // given delay in job
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Resolving', delay);
            resolve('done ' + delay);
        }, delay);
    });
}
// array of promises
var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
    console.log('All done');
    data.forEach(function(text) {
        console.log(text);
    });
});

// Promise.all returns a promise. The received data is an array containing the data of each given promise. 
// The promise is resvoled when all given promises are resolved.