//function to convert Excel sheet column title to its corresponding column number.

let result = 0;
const excelNumber = (columnTitle) => {
  for (let i = 0; i < columnTitle.length; i++) {
    result *= 26;
    result += columnTitle[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
};

console.log(`Input : AB
Output : ${excelNumber("AB")}`);
