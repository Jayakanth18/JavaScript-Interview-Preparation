const array = [23, 54, 65, 63, 85, 42, 53, 100];

const newArray = array.filter((ele) => {
  return ele % 2 === 0
    ? console.log(`${ele} is even`)
    : console.log(`${ele} is odd`);
});
