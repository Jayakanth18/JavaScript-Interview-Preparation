let string = "Jayakanth";

// with built in methods
let reverseString = (input) => {
  input = input.split("");
  input = input.reverse();
  input = input.join("");
  return input;
};

console.log(reverseString(string));

// without built in methods
function reverse1(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"));
