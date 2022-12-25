// Simple example of Promise

// const promise = new Promise ((resolve, reject) => {
//     let marks = 150;
//     if (marks >=80) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// promise
// .then(() => {
//     console.log("Resolve Called")
// })
// .catch(() => {
//     console.log("Reject Called")

// })


// Example 2:

/*
const promiseFunc = (marks) => {
    return new Promise((resolve, reject) => {
        if (marks >=80) {
        resolve("You Passed")
    } else {
        reject()
    }
})
}

promiseFunc(80)
.then((status) => {
    console.log("Resolve Called")
})
.catch(() => {
    console.log("Reject Called")

})
 */

// Example 3 Promise:

/*

const loginUserPromise = (email, pass) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(email)
        }, 2000)
    })
}

const getUserVideosPromise = (em) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 5000)
    })
}

loginUserPromise("hina@gmail.com", 7777)
    .then((e) => {
        console.log(e)
       return getUserVideosPromise()

})
.then((res) => console.log(res))

*/

// Example 4 Promise:

/*

const loginUserPromise = (email, pass) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {

            if (email=== "hina@gmail.com" && pass === 0777) {
            resolve(email)
            } else {
            reject("Invalid email or password")
            }
        }, 2000)
    })
}

const getUserVideosPromise = (em) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 2000)
    })
}

loginUserPromise("hina@gmail.com", 7777)
    .then((e) => {
        console.log(e)
       return getUserVideosPromise()

})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err)

})

*/

// Example 5 Promise:

const loginUserPromise = (email, pass) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {

            if (email){
                resolve(email)
            } else {
            reject("Provide Email")
            }
        }, 2000)
    })
}

const getUserVideosPromise = (em) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 2000)
    })
}

loginUserPromise("hina@gmail.com", 7777)
    .then((e) => {
        console.log(e)
       return getUserVideosPromise()
})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err)
})
.then((err) => 
console.log("CALLED"))

