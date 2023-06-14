let a = 1;
let b = 0;
let temp;
let series = 7;

for (let i = 0; i < series; i++) {
  temp = a + b;
  a = b;
  b = temp;
  console.log(temp);
}

