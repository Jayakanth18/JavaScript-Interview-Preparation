let string = "Jayakanth1812@2001.R";
let chars = [];
let digits = [];

for (let i = 0; i < string.length; i++) {
  const singleChar = string.charAt(i);
  if (singleChar.match(/[^0-9]/g))
    chars.push(singleChar); //regex to omit 0 to 9
  else if (singleChar.match(/[0-9]/g)) digits.push(singleChar); //regex to include 0 to 9
}

console.log(chars.join(""));
console.log(digits.join(""));
