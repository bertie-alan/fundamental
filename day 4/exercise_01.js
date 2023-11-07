//01
//create a triangle pattern according to the height we provide

let height = 10;
let result = "";
let counter = 1;

function trianglePattern(height) {
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      if (counter < 10) {
        result += "0" + counter++ + " ";
      }
      else {
        result += counter++ + " ";
      }
    }
    console.log(result);
    result = "";
  }
}

trianglePattern(height);
