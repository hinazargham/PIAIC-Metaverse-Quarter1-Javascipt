// Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. 
// You can use JavaScript to create your own version of this game, applying the logic with an 
// if statement.

// install these packages
// npm install prompt-sync
// npm install random-int

import randomInteger from "random-int";
import promptSync from "prompt-sync";

// Available choices
const choices = ["rock", "paper", "scissor"];

const userPrompt = " 0 for Rock, 1 for Paper, 2 for Scissors ";
let outcome = "Ready to Play...";

// Computer Chooses Randomly

const computerChoice = randomInteger(0, 2);
const computerChoiceName = choices[computerChoice];

const prompt = promptSync();
const userInput = prompt(userPrompt);
const userChoice =  choices[userInput];

if (computerChoice === userChoice) {
    outcome = "Draw";
} else if (computerChoiceName === "rock" && userChoice === "scissor" ){
    outcome = "Computer wins!! ";
} else if (computerChoiceName === "paper" && userChoice === "rock" ){
    outcome = "Computer wins!! ";
} else if (computerChoiceName === "scissor" && userChoice === "paper" ){
    outcome = "Computer wins!! ";
} else if (computerChoiceName === "scissor" && userChoice === "rock" ){
    outcome = "Player wins!! ";
} else if (computerChoiceName === "rock" && userChoice === "paper" ){
    outcome = "Player wins!! ";
} else if (computerChoiceName === "paper" && userChoice === "scissor" ){
    outcome = "Player wins!! ";
} else {
    outcome = "Invalid Entry! Try Again"
}

console.log("Computer chooses " + computerChoiceName);
console.log("Player chooses  " + userChoice);
console.log(outcome);





