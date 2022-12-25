
let testVariable = 1; 
console.log(typeof testVariable);

let v1 = 2; 
let v2 = "2"; 
console.log(v1 * v2); // 4 ← Type Number
console.log(v1 + v2); // “22” ← Type String

// Operators
let num1= 1;
console.log(num1) //1

let num2= "hi" + 45;
console.log(num2) //hi45

let num3= "1" + 45;
console.log(num3) //145

var myName = "Hina" ;
var hello = "Hello "+ myName ;
console.log(hello); //Hello Hina

let n1 = 1;
let n2 = 2;
console.log(n1 + n2); // 3
let str1 = "1";
let str2 = "2";
console.log(str1 + str2); // “12”

let n11 = 10;
let n12 = 3;
console.log(n11 % n12); // 1

let n = 5;
console.log(n); // 5
n += 5;
console.log(n); // 10
n -= 5;
console.log(n); // 5

console.log(n == 5); // true
console.log(n === 5); // true
console.log(n != 5); // false
console.log(n > 8); // false
console.log(n < 8); // true
console.log(n >= 8); // false
console.log(n <= 8); // true

console.log("ans",true=='true')

x11= 333333n;
console.log(x11)
y11=Number(x11)
console.log(x11=y11)

let add = 2 + 3;  // 5
let subtraction = 8 - 4;  // 4
let multiplication = 2 * 2;  // 4
let division = 4 / 2;  // 2
let modulus = 9 % 3;  // 0
console.log("2"*"2"*"2") //8

let i = 1;
let num = i++  //  1

let y = 1;
let yum = ++y  //  2

let u = 1;
let u1 = u--  //  1

let w = 1;
let w1 = --w  //  0

console.log(num, yum, u1, w1)

var totalVal = (5 + 2)  *  3 + 6;  // 27
var totalVal = (2 * 4) * 4 + 2; // 34

// let x = prompt("Where does the Pope live?"); 
// let correctAnswer = "Pakistan"; 
// if (x == correctAnswer ) { 
// 	alert("Correct!"); 
// } else if (x=="Pakista") {
// 	alert("Close!");
// } else {
// 	alert("Wrong!");
// }

let your_name = "Hina"
let val = `Hello ${your_name}`
console.log(val)

console.log(typeof your_name) //string
console.log(typeof num1) //number
console.log(typeof true) //boolean
console.log(typeof typeof num1) //string
console.log("Convert string into number: ", Number(your_name)) //NaN
console.log(typeof NaN) //number
console.log(typeof Number(your_name)) //number
console.log(typeof undefined) //undefined
console.log(typeof null) //object

// Operators
let a = 2 + 2 == "4" //  true
let b = 2 + 2 === "4" //  false
let c = 2 + 2 > 4  //  false
let d = 2 + 2 >=  4  //  true
let e = 2 + 3 !==  5  //  false
console.log(e)

let x = 6
y = y + 8;
console.log(y) // 10

let a1 = x < y && x === 6 // true
let a2 = x < y && x !== 6  // false
let a3 = x === y || y === 10 // true 
let a4 = (x===6 && y===4) //false
let a5 = (x===6 && y===4) || x < y  // true
console.log(a1, a2, a3, a4, a5)

let x1= 1;
let x2= 2;
let x3= 5;
console.log("ans1", x1++ + ++x2 + x3--) //1 + 3 + 5
console.log("ans2", x1++ - ++x2 - x3--) // 1 - 3 - 5


// Conditions:

let t= 8;
console.log(t)
if (t % 2 == 0){
    console.log("Even number")
}
else{
    console.log("Old number")
}

if (true && true && true){
    console.log("All conditions must be true")}
else if(true ||true || true){
    console.log("One conditions must be true")
}

// Arrays
let fruits = ["apple","banana", "orange", "grapes", "strawberry"]
fruits[0] // apple
fruits[3] // grapes
let z = [1, 2, "Hina"] // Arrays can store multiple types of data 
console.log(z)

var pets = [];
pets[0] = "dog"; // adds “dog” to an array at 0 index
pets[1] = "cat"; // adds “cat” to an array at index 1
console.log(pets)

pets.pop(); // removes the last element of an array which is cat in our case
console.log(pets)

pets.push("parrot"); // adds a new element to an array
console.log(pets)

pets[3] = "rabbit"; // adds “rabbit” to an array at 3rd index
pets[4] = "duck"; // adds “duck” to an array at index 4th
console.log(pets)


pets.shift(); // removes the first element of an array which is dog in our case
console.log(pets)

pets.unshift("fish"); // adds a new element to an array (at the beginning)
console.log(pets)

const f = ["Banana", "Orange", "Apple", "Mango"];
f.splice(2, 0, "Lemon", "Kiwi"); 
// adds elements to an array at 2nd index
// deleted 0 elements
console.log(f) // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
f2= f.splice(3, 2, "Grapes", "Peach"); 
console.log(f)
console.log(f2)

const f1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(f1)

const citrus = f1.slice(1); 
console.log(citrus) // [Orange,Lemon,Apple,Mango]
console.log(f1) // no change

// Objects:

// Persons Array - Key Value Pair syntax
const persons = [
    {
      firstName: "Hina",
      lastName: "Z",
      age: 20,
      "eye-Color": "brown",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      age: 30,
      "eye-Color": "blue",
    },
  ];
  
  // Access Person 1
  persons[0].age // 22
  persons[1].age // 50

  console.log(persons[0].age, persons[1].age)

 

console.log(true == 'true')












