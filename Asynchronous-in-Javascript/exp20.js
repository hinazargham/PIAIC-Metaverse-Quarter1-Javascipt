// If you want to return a rejected promise in an async function, 
// you just have to throw an error. Look at this example:


async function job() {
    throw new Error("Access denied");
}

job()

.then(function(message) {
    console.log(message);
})

.catch(function(error) {
    console.log(error);
});