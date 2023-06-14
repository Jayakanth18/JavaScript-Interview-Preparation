let string = "Jayakanth";

let reverseString = (input) => {
  input = input.split("");
  input = input.reverse();
  input = input.join("");
  return input;
};

console.log(reverseString(string));
