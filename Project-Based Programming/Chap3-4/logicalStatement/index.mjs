import PromptSync from "prompt-sync";
const prompt = PromptSync();

//
let isInPakistan = true;
if (isInPakistan) {
    console.log("oh!! Hello")
} else {
    console.log("Bye.. !!")
}

// Using if else 
let percentage = prompt( "What's your percentage? ");
if (percentage >= 90){
    console.log("A+")
} else if (percentage >= 80) {
    console.log("A")
} else if (percentage >= 70) {
    console.log("B")
} else if (percentage >= 60) {
    console.log("C")
} else if (percentage >= 50) {
    console.log("D")
} else {
    console.log("F") 
}

// Conditional ternary operators
let percentage1 = prompt( "What's your percentage? ");
const result = percentage1 >= 50 ? "Passed" : "Failed"
console.log(result)

let isPakistan = prompt("Are you in Pakistan? ");
const greeting = isPakistan === "true" ? "Hello" : "Bye";
console.log(greeting)

// Switch Case
let location = prompt('Where are you?' )
switch(location) {
    case "America":
        console.log("Hello");
        break;
    case "Germany":
        console.log("Hallo");
        break;
    case "Turkey":
        console.log("Merhaba");
        break;
    case "India":
        console.log("namaste");
        break;
    default:
        console.log("Salam")
}
