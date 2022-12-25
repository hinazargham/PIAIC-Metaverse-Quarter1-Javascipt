// Async

// Example 1 of Async 

/*
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

const getUserDetails = async() => {
    const userEmail = await loginUserPromise("hina@gmail.com", 7777)
    console.log(userEmail)
    const videos = getUserVideosPromise(userEmail) //without await
    console.log(videos) // Pending 
}
getUserDetails()

*/

// Example 2 of Async (using await in const videos lines)

/*

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

const getUserDetails = async() => {
    const userEmail = await loginUserPromise("hina@gmail.com", 7777)
    console.log(userEmail)
    const videos = await getUserVideosPromise(userEmail) //now use await
    console.log(videos) 
}
getUserDetails()

*/

// Example 3 of Async with Try and Catch

const loginUserPromise = (email, pass) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {

            if (email === "hina@gmail.com" && pass === 7777){
                resolve(email)
            } else {
            reject("Invalid Email and Password")
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

const getUserDetails = async() => {

    try {
        const userEmail = await loginUserPromise("hina@gmail.com", 77977)
        console.log(userEmail)
        const videos = await getUserVideosPromise(userEmail) //now use await
        console.log(videos)
    }
    catch (err) {
        console.log(err)
    }
}
getUserDetails()