async function job() {
    return 'test';
}

async function main() {
    console.log(await job());
}

// Don't forget to call your main
main();

// You can't use await outside of an async function. 
// The code will just crash if you try. 
// When you are coding in a NodeJS environment, that means that you can't use await in the body directly. 
// You have to use a function like this