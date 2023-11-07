//10
//find the difference in 2 given array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

const findDifference = (arr1, arr2) => {
  const arr1Diff = arr1.filter((element) => !arr2.includes(element));
  const arr2Diff = arr2.filter((element) => !arr1.includes(element));
  return arr1Diff.concat(arr2Diff);
};

console.log(findDifference(arr1, arr2));
