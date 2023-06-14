// smallest value
const number = [23,54,76];

let smallValue = number.reduce((pre,curr) => {
    return pre > curr ?curr :pre
})

console.log(smallValue)