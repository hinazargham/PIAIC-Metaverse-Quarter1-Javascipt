// Practice exercise 13.1

function greet(fullName){
    console.log(`Hello ${fullName[0] + ' ' + fullName[1]}`)

}

function secondfunction(userName, callback){
    const name = userName.split(" ");
    //console.log(name);
    callback(name);
}

secondfunction("Hina Z", greet)