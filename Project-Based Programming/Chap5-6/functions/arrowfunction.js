// no function keyword in arrow function
// directly start with parameters

// normal function
function add(x,y){
    return x+y
}
ans= add(3,4)
console.log(ans)

// Arrow function
// use in map function callback prmomises 

let add2 = (x1,y1) => x1+y1 //assign
add2(3,4)

console.log(add2(3,4))

const student = {
    first: "Hina",
    last: "Z",
    full: function() {
        return this.first + this.last
    }
}
console.log(student.full())

