const num = 7;

for (let i = 1; i < 11; i++) {
    console.log(num * i)
    
}

// Practice exercise 5.3

const myWork = [];
for (let i = 1; i < 11; i++) {
    let status = 1 % 2 ? true : false //use modulus to create alternating effect
    let temporary = {
        name : `Lesson ${i}`, //template literals // for each loop
        status : status
    }
    myWork.push(temporary)
    
}
console.log(myWork)