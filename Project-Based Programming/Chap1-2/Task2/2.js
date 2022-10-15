/*
Set values for height in inches and weight in pounds, then convert the values to centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: 
this is equal to weight (in kilos) divided by squared height (in meters). Output the results to the console.
*/

let height= prompt("Please enter the value of height in inches");
console.log("Value of height = " + height + " inches")

let weight= prompt("Please enter the value of weight in inches");
console.log("Value of weight = " + weight + " pounds")

 // Use the conversion factor
let inchtocm = 2.54;
let poundtokilo = 2.2046;  

let heightincm = height * inchtocm;
let weightinkilo = weight/poundtokilo;

console.log("Value of height = " + heightincm + " centimeter")
console.log("Value of weight = " + weightinkilo + " kilo")

let cmtom= 0.01;
let heightinmeter= heightincm * cmtom;
console.log("Value of height = " + heightinmeter + " meters")

let bmi = weightinkilo / (heightinmeter)**2
console.log("BMI value is " + bmi + " kg/m^2")



// Book Solution (easy)
// let inches = 72;
// let pounds = 180;
// let weight = pounds / 2.2046; // in kilos
// let height = inches * 2.54; // height in centimetres console.log(weight, height);
// let bmi = weight/(height/100*height/100); console.log(bmi);