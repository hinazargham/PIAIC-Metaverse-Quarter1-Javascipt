//Strings

let text = "Mr Blue has a blue house and a blue car";
let result =  text.replace(/blue/g, "red")
console.log(result)

let text11 = "Mr Blue has a blue house and a blue car";
let result1 =  text.replace(/blue/g, "green")
console.log(result1)

// Numbers
let scoreAvg = 134.50;
let numberOfStars = Math.round(scoreAvg)
console.log(numberOfStars)

let a =Math.ceil(2.10); //round up
console.log(a)
let b = Math.ceil(-3.40);
console.log(b)


let x1=parseInt(10)
console.log(x1) //10
let x2=parseInt(10.00)
console.log(x2) //10
let x3=parseInt(10.95)
console.log(x3) //10
let x4=parseInt("Hello")
console.log(x4) // NaN

let y1=parseFloat(10)
console.log(y1) //10
let y2=parseFloat(10.00)
console.log(y2) //10
let y3=parseFloat(10.95)
console.log(y3) //10.95
let y4=parseFloat("Hello")
console.log(y4) //NaN

let a1=Number(10)
console.log(a1) //10
let a2=Number(10.90)
console.log(a2) //10.90
let a3=Number(true)
console.log(a3) //1
let a5=Number(false)
console.log(a5) //0
let a4=Number("Hello")
console.log(a4) //NaN

//Coercion
let p = String(22);
console.log(typeof p)

let sub = 2 - "2"; // in this case it convert it into numbre
console.log(sub)

//toFixed()) Method Fix decimal points
let total = 25.154123
let prettyTotal = total.toFixed(3); // 25.15
let prettyTotal1 = total.toFixed(); // 25

console.log(prettyTotal)
console.log(prettyTotal1)
