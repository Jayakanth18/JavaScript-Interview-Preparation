//using third variable

let a = 1;
let b = 2;
let tempValue;
tempValue = a;
a = b;
b = tempValue;
console.log(`value of a= ${a} and value of a= ${b}`);

//without using third variable

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(`value of x= ${x} and value of y= ${y}`);
