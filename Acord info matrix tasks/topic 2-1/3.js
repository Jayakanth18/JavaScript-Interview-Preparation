//vote eligiblity

let age = 0;

if (age < 0) {
  console.log("enter positive number");
} else if (age == 0) {
  console.log("zero is not a age");
} else if (age > 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}
