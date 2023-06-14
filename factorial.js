let input = 5;
let fact = 1;

if (input < 0) {
  console.log(
    "Factorial is not possible in negative number...!! Please enter positive number"
  );
} else if (input === 0) {
  console.log("Factorial is not possible not possible with zero");
} else {
  for (let i = 1; i <= input; i++) {
    fact = fact * i;
  }
  console.log(`The factorial of ${input} is ${fact}`);
}
