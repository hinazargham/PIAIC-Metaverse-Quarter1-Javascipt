// Practice exercise 13.2

// if selected resolve
const promise = new Promise( 
   (resolve, reject) => resolve("Start Counting!")
)

const counter = (value) => console.log(value);
promise.then((value) => {
    counter(value);
    return "One";
})
.then((value) => {
    counter(value);
    return "Two"
})
.then((value) => {
    counter(value);
    return "Three"
})
.then((value) => {
    counter(value);
})


// Extra not included in book (if selected reject)
const promise2 = new Promise((resolve, reject) => 
   reject("Oooops! Error.. Not Counting :(")
 );
 
 const counter2 = (value) => console.log(value);

 promise2.then((value) => {
     counter(value);
     return "one";
 })
 .then((value) => {
     counter2(value);
     return "two"
 })
 .then((value) => {
     counter2(value);
     return "three"
 })
 .then((value) => {
     counter2(value);
 }).
 catch((error => console.log(error)))