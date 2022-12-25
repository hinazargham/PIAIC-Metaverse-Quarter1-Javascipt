// 

console.log("Start")

function makeFryAnda(callback) {
    setTimeout(() => {
        callback("Egg Fried")
    }, 2000)
}

function eggFriedCallback(param) {
    console.log(param);
}
makeFryAnda(eggFriedCallback);

console.log("Between")

function toastBread(cb) {
    setTimeout(() => {
        cb("Toast Bread");
    }, 2000);
}

toastBread(function(para) {
    console.log(para);
})

console.log("End")