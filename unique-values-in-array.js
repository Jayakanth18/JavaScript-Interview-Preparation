let number = [100, 25, 96, 40, 25, 40, 101, 100];

let uniqueNumber = number.filter((element, index, array) => {
  return array.indexOf(element) === index;
});

console.log(uniqueNumber.sort((a, b) => a - b));
