const value = [12,54,256,98,122,31,9];

const minimumValue = value.reduce((previousValue, currentValue) => {
    return previousValue < currentValue ? previousValue : currentValue
})

console.log(minimumValue)
