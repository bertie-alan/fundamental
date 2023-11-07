//05
//adds an element to the end of an array. However, the element should only be added if it is not already in the array.

let arr = [1, 2, 3, 4];
let newElement = 7;

function addNewElement(arr, newElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != newElement) {
      arr.push(newElement);
      break;
    }
  }
  return arr;
}

console.log(addNewElement(arr, newElement));
