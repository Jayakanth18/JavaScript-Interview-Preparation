
const duplicatedArray = [11,20,84,54,84,13,20,100,123,100]

let newArray = duplicatedArray.filter((element, index, arr) => { 
  return arr.indexOf(element) != index
})

console.log(newArray)
