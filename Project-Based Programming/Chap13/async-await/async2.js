/*
With the async keyword, we can make a function return a Promise. This makes the Promises nicer to read 
and look a lot like synchronous (non-concurrent) code. We can use this Promise just like we learned 
in the previous section, or we can use the more powerful await keyword to wait until the Promise is 
done. await only works in an asynchronous function.
*/


function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Something" + x);
}, 5000); });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);