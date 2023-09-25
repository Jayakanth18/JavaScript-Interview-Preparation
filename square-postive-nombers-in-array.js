const array = [5, -9, -4, 8, -6, -5, 12, 6];

const positiveNumbers = array.filter(value => value > 0)

const squareOfPositiveNumbers = positiveNumbers.map(value => value * value)
