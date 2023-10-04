//write a program to print to the screen numbers I to n.
//For multiples of 3, print 'fizz';
//for multiples of 5, print 'buzz';
//for multiples of both 3 and 5 print 'fizzbuzz'

const range = 15;

const fizzbuzz = () => {
  for (let i = 1; i <= range; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzbuzz();

//array method

function fizzBuzz(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) answer.push("FizzBuzz");
    else if (i % 3 === 0) answer.push("Fizz");
    else if (i % 5 === 0) answer.push("Buzz");
    else answer.push(i.toString());
  }

  return answer;
  //   return answer.join(",");
}

console.log(fizzBuzz(14));
