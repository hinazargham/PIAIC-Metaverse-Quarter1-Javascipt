// While loops using 

import promptSync from "prompt-sync"
const prompt = promptSync();

let input = prompt("On a scale of 1-10, how much do you like this name ???? ")
input = Number(input);

if (input > 0 && input < 11){
    input = false;
} else {
    input = true;

}
while(input) {
    input = prompt("On a scale of 1-10, how much do you like this name???? ")
    console.log(input);
}

// Practice exercise 5.1

const maxValue = 10;
// const randomNumber = Math.random()
const randomNumber = Math.floor(Math.random()*maxValue) + 1;

console.log(randomNumber)

let status = false;

while(!status){
    let userInput = prompt( "Guess a number between 1 and  " + randomNumber + ' ');
    userInput = Number(userInput);

    if ( userInput == randomNumber){
        status = true;
        console.log("You WON! The number was " + randomNumber);
    }else if(userInput > randomNumber) {
        console.log("Sorry your guess was too high!!");
    }else if(userInput < randomNumber) {
        console.log("Sorry your guess was too low!! ");
    }
}

