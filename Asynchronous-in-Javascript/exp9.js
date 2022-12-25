
// The reject function is used to trigger an error. When you use then, you can give 2 functions. 
// The first function is used when the promise exits successfully. 
// The second function is used when the promise encounters an error.

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});