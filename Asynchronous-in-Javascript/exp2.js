
// Even with a 0 millesecond delay, the asynchronous message will be displayed after the 
// synchronous message. This is because any function given to the setTimeout function will be executed 
// asynchronously, when the main thread is not busy anymore. 

setTimeout(function() {
    console.log('I am an asynchronous message'); //executed last
}); // You can omit the 0

console.log('Test 1'); // executed first

for (let i = 0; i < 10000; ++i) {
    doSomeStuff();
}

console.log('Test 2'); // executed second

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}