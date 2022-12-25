function getToastPromise(){
    return new Promise((resolve, reject) =>{
        let mood = 5;
        setTimeout(() => {
        if (mood >= 5) {
            resolve("Toast is Ready")
        }
        else{
            reject("I am in a bad mood.")
    }
})
    });
}

function getEggPromise(){
    return new Promise((resolve, reject) =>{
        let mood = 6;
        setTimeout(() => {
        if (mood >= 5) {
            resolve("Egg is Ready")
        }
        else{
            reject("I am in a bad mood. Don't want to make a fried egg!!")
    }
})
    });
}

getToastPromise()

.then((arg) => {
    console.log(arg);
    return getEggPromise();
})
.then((arg1) => {
    console.log(arg1);
})
.catch((error) =>{
    console.log(error);
})

// Here egg depend on toast, go to await function