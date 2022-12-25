//How call stack works:
function a(){
    console.log("a")
}
a()
console.log("End")

//How Execute asynchronus behaviour
console.log("Hi");
setTimeout(function cb1() {
    
    console.log("cb1")
}, 5000);
console.log("Bye")