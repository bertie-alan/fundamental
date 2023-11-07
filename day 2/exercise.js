//01
//convert celsius to fahrenheit

let celcius = 60;
let result = 0;

result = celcius * (9 / 5) + 32;

console.log(`${celcius} Celcius is ${result} Fahrenheit.`);

//02
//check whether the number is odd or even

let number = 25;

if (number % 2 === 0) {
  console.log("even number.");
} else {
  console.log("odd number.");
}

//03
//check whether the number is prime number or not

let checkPrimeNumber = 55;
let counter = 0;

for (let i = 1; i < checkPrimeNumber; i++) {
  if (checkPrimeNumber % i === 0) {
    counter += 1;
  }
}

if (counter == 1) {
  console.log(`${checkPrimeNumber} is a prime number.`);
} else if (counter > 1) {
  console.log(`${checkPrimeNumber} is not a prime number.`);
}

//04
//find the sum of the numbers 1 to N

let numberSum = 5;
let sumResult = 0;
let sumMsg = "";

for (let i = 1; i <= numberSum; i++) {
  sumResult += i;
  if (i < numberSum) {
    sumMsg += `${i} + `;
  } else {
    sumMsg += `${i}`;
  }
}

console.log(`${sumMsg} = ${sumResult}`);

//05
//find factorial of a number

let numberFactorial = 6;
let factorialResult = 1;
let factorialMsg = "";

for (let i = numberFactorial; i >= 1; i--) {
  factorialResult *= i;
  if (i <= numberFactorial && i != 1) {
    factorialMsg += `${i} * `;
  } else {
    factorialMsg += `${i}`;
  }
}

console.log(`${factorialMsg} = ${factorialResult}`);

//06
//first N fibonacci numbers

let fibonacciN = 15;
let number1 = 0; //angka terakhir penambahan
let number2 = 0; //hasil penjumlahan terakhir
let fibonacciResult = 0;

for (let i = 1; i <= fibonacciN; i++) {
  if (i == 1) {
    fibonacciResult = 2;
    number1 = 1;
    number2 = 1;
  } else {
    number1 = number2;
    number2 = fibonacciResult;
    fibonacciResult = number1 + number2;
    /*console.log(
      `i : ${i}, number 1 = ${number1}, number 2 = ${number2} | result = ${fibonacciResult}`
    );*/
  }
}

console.log(`${fibonacciN} -> ${number1}`);
