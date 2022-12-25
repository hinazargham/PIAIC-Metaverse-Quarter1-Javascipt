const allowedPasswords=  ["password", "piaic", "dinner"];

function checkPassword(password) {
    return allowedPasswords.includes(password)
}

function login(password) {
    return new Promise((resolve, reject) => {
        if (checkPassword(password)) {
            resolve ({
                status: true
            })
         } else {
                reject ({
                    status: false
           })
        }
    })
}

function checker(password) {
    login(password)
    .then(value => {
        console.log("Authorize User");
        console.log(value)
    })
    .catch(value => {
        console.log("Reject User");
        console.log(value)
    })
}

checker("Hina");
// checker("piaic")

