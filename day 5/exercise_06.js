//06
//remove all odd numbers in an array and return a new array that contains even numbers only

let numbers = [1, 2, 3, 4, 5, 6];
let arrEven = [];

function evenNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arrEven.push(numbers[i]);
    }
  }
  return arrEven;
}

console.log(`${numbers} -> ${evenNumbers(numbers)}`);
