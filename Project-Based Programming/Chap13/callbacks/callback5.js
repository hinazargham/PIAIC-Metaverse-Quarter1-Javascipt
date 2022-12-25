// Now we want egg fry first and toast bread

function makeFryAnda(callback) {
    setTimeout(() => {
        callback("Egg Fried")
    }, 2000)
}

function toastBread(cb) {
    setTimeout(() => {
        cb("Toast Bread");
    }, 5000);
}

toastBread(function(para) { // function declare 
    console.log(para);
    makeFryAnda(function(para1) {
        console.log(para1);
    });
})

// Same code using Arrow function
// function makeFryAnda(callback) {
//     setTimeout(() => {
//         callback("Egg Fried")
//     }, 2000)
// }

// function toastBread(cb) {
//     setTimeout(() => {
//         cb("Toast Bread");
//     }, 2000);
// }

// toastBread((arg) => { console.log(arg);
//     makeFryAnda((arg1) => {
//         console.log(arg1);
//     });
// })