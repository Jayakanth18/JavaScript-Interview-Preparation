let value = [22, 78, 50, 150, -200];

const total = value.reduce((pre, cur) => {
  return pre + cur;
});

console.log("total is:", total);
