var a = [1, 2];
var b = a.concat(1, [3, 1]);
console.log(b);

var a = [0, 0];
var b = a.concat(1, [3, 1]);
console.log(b);

var arr = new Array(5);
arr.fill(0);
console.log(arr);

var arr = [];
arr.fill(10, 0, 5);
console.log(arr);

var arr = [1, 3, 5, 7];
console.log(arr.slice());

var arr = [1, 4, 9];
console.log(arr.slice(3));
console.log(arr)
console.log(arr.slice(2));

function square(n) { return n ** 2; }
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(square));
console.log(arr);

var a = [0, 0];
a.concat([1, 1]);
console.log(a);

let x= 5;
let y= "5";
console.log(x !=y, x !==y)