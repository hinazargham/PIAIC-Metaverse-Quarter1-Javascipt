/* Question:
Create a variable that contains a value in miles, convert it to kilometers, 
and log the value in kilometers in the following format:
*/

// Ask User to enter the distance
let value= prompt("Please enter the distance in miles");
console.log("Value in Miles = " + value)

let milestokilometer = 1.60934;

 // Use the conversion factor to multiply miles into kilometer
let kilometers = value * milestokilometer;

console.log("Value in Kilometers = " + kilometers)

console.log("The distance of " + kilometers + " kms is equal to " + value + " miles")