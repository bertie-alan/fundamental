//09
//find duplicate values in an array

arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
arrValues = [];
arrSort = [];

/*const findDuplicate = (arr) => {
  arrSort = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arrSort[i] == arrSort[i - 1]) {
      arrValues.push(arrSort[i]);
    }
  }
  return arrValues;
};*/

const findDuplicate = (arr) => {
  arrSort = arr.sort((a, b) => a - b);
  for (i in arrSort) {
    if (arrSort[i] === arrSort[i - 1]) {
      arrValues.push(arrSort[i]);
    }
  }
  return [...new Set(arrValues)]; //# inget syntax ini
};

console.log(`arr = ${arr} -> ${findDuplicate(arr)}`);
