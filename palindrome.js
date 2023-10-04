let string = "MalayaLaM";
//with built-in method
const palindromeFunction = () => {
  string = string.toLocaleLowerCase();
  reversedString = string.split("").reverse().join("");

  if (string === reversedString) {
    console.log(`${string} is a palindrome`);
  } else {
    console.log(`${string} is not a palindrome`);
  }
};
let start = Date.now(); //to check efficency
palindromeFunction(string);
console.log(Date.now() - start); //

//without built-in method
const palindromeFunc2 = (string) => {
  let reversedString2 = "";
  for (let i = string.length; i >= 0; i--) {
    reversedString2 += string.charAt(i);
  }
  return string.toLowerCase() === reversedString2.toLowerCase()
    ? `${string} is a palindrome`
    : `${string} is not a palindrome`;
};
console.log(palindromeFunc2("Malayalam"));
