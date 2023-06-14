let string = "MalayaLaM";

const palindromeFunction = () => {
  string = string.toLocaleLowerCase();
  reversedString = string.split("").reverse().join("");

  if (string === reversedString) {
    console.log(`${string} is a palindrome`);
  } else {
    console.log(`${string} is not a palindrome`);
  }
};
let start = Date.now();
palindromeFunction(string);
console.log(Date.now() - start);
