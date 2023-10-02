let sampleString = "Jk1812@2001";

let onlyNumber = sampleString.split(/[^0-9]/g);
let sum = 0;

onlyNumber.map(ele =>{
    return sum += Number(ele)
})

console.log(sum)
