//07
//insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input.
//(if the maximum size of the given input is 5 than the array can only contain 5 elements).

let maxSize = 5;
let givenIntegers;
let arrInt = [];

function multipleGivenInteger(maxSize, ...givenIntegers) {
  for (let i = 0; i < maxSize; i++) {
    arrInt.push(givenIntegers[i]);
  }
  return arrInt;
}

console.log(`maxSize = ${maxSize}, given integers is 5, 10, 24, 3, 6, 7, 8`);
console.log(multipleGivenInteger(maxSize, 5, 10, 24, 3, 6, 7, 8));
