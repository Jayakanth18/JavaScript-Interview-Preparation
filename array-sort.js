//string array

let fruits = ["Banana", "Watermelon", "Jackfruit", "Mango", "Kiwi", "Apple"];

let sortedFruits = fruits.sort();
console.log(sortedFruits);

//int array

let rupees = [2000, 10, 50, 200, 100, 500, 20];
//if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

let sortedRupees = rupees.sort((a, b) => a - b);

console.log(sortedRupees);
