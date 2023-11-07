//01
//get the lowest, highest and average value in the array
//with sort function

let arr = [12, 5, 23, 18, 4, 45, 32];
let arrSort = [];

arrSort = arr.sort((a, b) => a - b);

let lowest = arrSort[0];
let highest = arrSort[arrSort.length - 1];
let average = 0;
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

average = total / arr.length;

console.log(arrSort);
console.log(`lowest : ${lowest}, highest : ${highest}, average : ${average.toFixed(4)}`);


//without sort function

