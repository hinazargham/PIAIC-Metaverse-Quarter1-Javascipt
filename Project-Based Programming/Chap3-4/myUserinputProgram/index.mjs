import PromptSync from "prompt-sync";
const prompt = PromptSync();

var name = prompt("Enter your name? ");

console.log(name)

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);

