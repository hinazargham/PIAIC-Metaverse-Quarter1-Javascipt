// const array1 = [1, "Hina", true];
// console.log(array1)

// // Access data through Arrays
// const array2=  ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(array2[0]) // Sun

// array2[0] = "Sunday"
// console.log(array2[0]) // Sunday
// console.log("Length of array is " + array2.length)

// const daysOfWeek = []; // empty array
// console.log(daysOfWeek)

// // added element at the end using push method
// daysOfWeek.push(100);
// daysOfWeek.push("Sunday");
// daysOfWeek.push("Tuesday");
// console.log(daysOfWeek);

// // added element using splice method
// daysOfWeek.splice(2,0, "Monday");
// console.log(daysOfWeek)

// const daysOfWeek2 = [5, 6, 7, "Wednesday", "Thursday", 1000];
// console.log(daysOfWeek2)

// // combine two arrays
// const allDays= daysOfWeek.concat(daysOfWeek2)
// console.log(allDays)

// // Delete Last Element
// allDays.pop()
// console.log(allDays)

// // Delete First Element
// allDays.shift()
// console.log(allDays)

// // Delete Element from between/centre
// allDays.splice(3,3) // delete 5,6,7
// console.log(allDays)

// Access data through Arrays
const classDays=  ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
console.log(classDays)

let findValue= classDays.find(function(e) {e === "Thursday"});
let findValue2= classDays.find(function(e) {e === "Monday"});


console.log(findValue)
console.log(findValue2)

// Sorting numbers (first 1 range, then 2... )
let numArray = [1, 4, 0, 87, 19, 56, 33, 13, 22, 5];
let sortedArray = numArray.sort()
console.log(numArray)
console.log(typeof numArray[0] )
console.log(sortedArray)

// reverse method
numArray.reverse();
console.log(numArray)

const arr1 = [1, 2, 3, 4, 5]
const arr2= [arr1, arr1]
console.log(arr2)
console.log(arr2[0][1])