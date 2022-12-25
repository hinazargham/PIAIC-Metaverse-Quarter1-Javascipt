
// As you shown above, you can use the resolve function to fullfil the promise.
// The then function binds a callback to the promise and you can use the data given
// to the resolve function.


var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data);
});