const number = [128,256,512,32,64,16,1024];

const maximumNumber = number.reduce((pValue, cValue) => {
    return pValue > cValue ?pValue :cValue
})

console.log(`Maximum Number is ${maximumNumber}`)
