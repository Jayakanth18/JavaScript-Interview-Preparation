let array1 = [25, 2, 76, 95, 3];
let array2 = [09, 65, 87, 44, 125, 87];

//concat
let concat = array1.concat(array2);
console.log(concat);

//spread operator
let spread = [...array1, ...array2];
console.log(spread);

//sorting array
// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

let sorted = spread.sort((a, b) => a - b);
console.log(sorted);

let DESsorted = spread.sort((a, b) => b - a);
console.log(DESsorted);
