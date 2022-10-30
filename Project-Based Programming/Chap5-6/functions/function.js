// Functions are set of instructions that is meant to run again and again

//1
function coffeeOrder1() {
console.log("Your coffee is on its way!! ")
}
coffeeOrder1()

//2
function coffeeOrder2() {
    return "Your coffee is on its way!! "
    }
const order = coffeeOrder2();
console.log(order)

//3
function coffeeOrder3(drink) {
    return `Your ${drink} is on its way!! `
    }
const order3 = coffeeOrder3("Double Shot Expresso");
console.log(order3)