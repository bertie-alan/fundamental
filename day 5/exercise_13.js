//13
//function from a given array of mixed data types and return the sum of all the number

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
let result = 0;

const sumNumber = (mixedArray) => {
  const arrNumberOnly = mixedArray.filter(
    (element) => typeof element === "number"
  );
  for (i in arrNumberOnly) {
    result += arrNumberOnly[i];
  }
  return result;
};

console.log(sumNumber(mixedArray));
