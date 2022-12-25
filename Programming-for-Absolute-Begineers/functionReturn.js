
// Without using Return
// const add = (a,b) => {
//     let result = a +b
//     console.log(result)
// }
// add(3,4)

const add = (a,b) => {
    let result = a +b
    return result
}
const result = add (80, 10)

if (result >= 99) {
    console.log("First")
}
else {
    console.log("Second")
}