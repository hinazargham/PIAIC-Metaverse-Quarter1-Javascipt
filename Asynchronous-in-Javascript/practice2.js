// 1) What is the value of the promise p3 in the code below?
var p = new Promise(function() {
    return "OK";
});

var p2 = p.then(function(data) {
    return data;
});

var p3 = p2.then(function(data) {
    return data + " Bye";
});

// ans: undefined

// 2) What log will be made by the following code, after 2 seconds?
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("OK");
    }, 2000);
});

p.then().then(function(data) {
    console.log(data);
});
// ans: "OK"

// 3) Determine the value of the promise p2 shown below after resolve("OK") is called (in line 3).
// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("OK");
//     }, 2000);
// }).
// then();

// var p2 = p.then(function(data) {
//     return data + " Good";
// })
// OK Good

// 4) Determine the state and value of the promise p in the following code.
var p = new Promise(function(resolve, reject) {
    throw "Sorry";
}).
then((data) => console.log(data), (data) => data);

//5) What will the code below log?
var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    return data;
});

var p3 = p.then(function(data) {
    return data;
});
console.log(p2 === p3);
// false

// 6) What will the code below log?
var p = new Promise(function(resolve, reject) {
    resolve("OK");
});

var p2 = p.then(function(data) {
    return new Promise(function(resolve, reject) {
        resolve(`data is ${data}`);
    });
});

p2.then(function(data) {
    console.log(data);
});
// data is Ok
console.log(typeof p)

// 7) What will the following code log, after 3 seconds?
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Good");
    }, 3000);
});

p.then(function(data) {
    console.log("OK " + data);
});
// OK Good

// 8) In the code shown below, what is p's internal slot [[PromiseValue]] equal to, once p gets fulfilled; by calling resolve() in line 3?
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 3000);
});
//undefined

//9) What is the sequence of logs in the code shown below?
var p = new Promise(function(resolve, reject) {
    resolve("First");
});

p.then(function(data) {
    console.log(data);
});

console.log("Second");
//Secong First

// The executor function is executed synchronously when a new promise object is instantiated.

var i = 5;
for (i < 5; i++) {console.log(i);
}