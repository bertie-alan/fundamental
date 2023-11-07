//14
//function from the below array of number that will return sum of duplicate values

let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10, 20, 20];
let arrResult = [];
let arrSort = [];
let sum = 0;

const sumDuplicateValues = (arr) => {
  arrSort = arr.sort((a, b) => a - b);
  for (let i = 0; i < arrSort.length; i++) {
    if (i == 0 && arrSort[i] == arrSort[i + 1]) {
      arrResult.push(arrSort[i]);
      sum += arrSort[i];
    }
    if (arrSort[i] == arrSort[i - 1]) {
      arrResult.push(arrSort[i]);
      sum += arrSort[i];
    }
  }
  return sum;
};

console.log(sumDuplicateValues(arr));
