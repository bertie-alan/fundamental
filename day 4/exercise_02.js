//02
//Fizz-Buzz

let n = 30;
let arr = [];

function FizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 15 != 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0 && i % 15 != 0) {
      arr.push("Buzz");
    } else if (i % 15 == 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}

FizzBuzz(n);
