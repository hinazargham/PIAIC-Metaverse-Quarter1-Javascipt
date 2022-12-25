// Simple Examples:

/*
const doSomething = (callback) => {
    callback()
}
const doSomething2 = () => {
    console.log("Call back called")
}

doSomething(doSomething2)
*/


// Timeout Example

/*
console.log("First")
setTimeout( () => {
    console.log("Second")
}, 3000)
console.log("Third")
*/

// Example

/*
const loginUser = (email, pass, callback) => {
    setTimeout (() => {
        callback(email)
}, 2000)
}

loginUser("hina@gmail.com", 7777, (email) => {
    console.log("email")

})
*/

// Example

const loginUser = (email, pass, callbackFunc) => {
    setTimeout (() => {
        callbackFunc(email)
}, 2000)
}

const getUserVideos = (email, cb) => {
    setTimeout (() => {
    cb(["v1", "v2", "v3"])
    }, 3000)
}
loginUser("hina@gmail.com", 7777, (email) => {
    console.log("User Logged in")
    getUserVideos(email, (videos) => {
        console.log("Got Videos")
        console.log(videos)

    })
})