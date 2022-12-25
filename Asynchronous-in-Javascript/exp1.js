// Asynchronous code is always executed after the main thread

setTimeout(function() {
    console.log('I am an asynchronous message 1'); //2nd
    console.log('I am an asynchronous message 2'); //2nd

}, 5000);

console.log('I am a synchronous message'); // first