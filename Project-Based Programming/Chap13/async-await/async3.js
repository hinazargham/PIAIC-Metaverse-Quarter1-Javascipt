

function getToastPromise(){
    return new Promise((resolve, reject) =>{
        let mood = 10;
        setTimeout(() => {
        if (mood >= 5) {
            resolve("Toast is Ready")
        }
        else{
            reject("I am in a bad mood. Don't want to bake a bread!!")
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
            reject("I am in a bad mood. Don't want to make a egg!!")
    }
})
    });
}

async function getResult() {
try{
    let toastResult = await getToastPromise();
    console.log(toastResult);
    let eggResult = await getEggPromise();
    console.log(eggResult)
}
catch(error){
    console.log(error);
}
}
getResult();