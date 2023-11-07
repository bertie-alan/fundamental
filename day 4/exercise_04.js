//04
//Removes all odd numbers and -> return even numbers only

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let arrTemp = [];

function arrEven(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrTemp.push(arr[i]);
    }
  }
  console.log(arrTemp);
  console.log(arr);
}

arrEven(arr);