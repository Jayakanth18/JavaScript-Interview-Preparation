// with built in methods
let reverseString = (input) => {
  input = input.split("");
  input = input.reverse();
  input = input.join("");
  return input;
};

console.log(reverseString("Welcome"));

// without built in methods

function reverseString2(str){
  let finalString ="";
  for(let i= str.length; i>=0; i--){
    finalString += str.charAt(i)
  }
  return finalString
}

console.log(reverseString2("welcome to javascript"))
