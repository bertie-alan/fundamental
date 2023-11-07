//02
//takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

let arr = ["apple", "banana", "cherry", "date"];
let result = "";

function arrOfWords(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      result += "and " + arr[i] + ".";
    } else {
      result += arr[i] + ", ";
    }
  }
  return result;
}

console.log(arrOfWords(arr));
