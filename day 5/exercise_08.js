//08
//combine 2 given array into one array

let arr1 = [1, 2, 3, 9];
let arr2 = [4, 5, 6];
let arrResult = [];

function combineArr(arr1, arr2) {
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i < arr1.length) {
      arrResult.push(arr1[i]);
    } else {
      arrResult.push(arr2[i - arr1.length]);
    }
  }
  return arrResult;
}

console.log(`arr1 = ${arr1}, arr2 = ${arr2} -> ${combineArr(arr1, arr2)}`);
