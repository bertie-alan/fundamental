//03
//Calculate BMI

let weight = 170;
let height = 1.62;

function calculateBMI(weight, height) {
  let result = weight / (height * height);
  if (result < 18.5) {
    console.log("less weight");
  } else if (result >= 18.5 && result <= 24.9) {
    console.log("ideal");
  } else if (result >= 25.0 && result <= 29.9) {
    console.log("overweight");
  } else if (result >= 30.0 && result <= 39.9) {
    console.log("very overweight");
  } else if (result > 39.9) {
    console.log("obesity");
  }
}

calculateBMI(weight,height);
