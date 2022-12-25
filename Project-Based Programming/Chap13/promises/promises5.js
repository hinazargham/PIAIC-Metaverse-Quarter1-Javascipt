// let toastpromise = new Promise((resolve, reject) =>{
//     let mood = 7
//     if (mood >= 5) {
//         resolve("Toast is Ready")
//     }
//     else
//     reject("I am in a bad mood")
// })

// toastpromise.then((arg) => {
//     console.log(arg);
// });

// Using Method:
function getToastPromise(){
    return new Promise((resolve, reject) =>{
        let mood = 2;
        if (mood >= 5) {
            resolve("Toast is Ready")
        }
        else{
            reject("I am in a bad mood")
    }
});
}

getToastPromise().then((arg) => {
    console.log(arg);
})
.catch((error) =>{
    console.log(error);
})