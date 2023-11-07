//04
//calculate each element in the same position from two arrays of integer

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arrResult = [];

function calculateElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arrResult.push(arr1[i] + arr2[i]);
  }
  return arrResult;
}

calculateElement(arr1, arr2);

console.log(`${arr1} + ${arr2} -> ${arrResult}`);
