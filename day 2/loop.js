/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

array.forEach(element => {
    
});
*/

// exercise in class
const numberOfFactorial = 6;
let result = 1;

for (let i = 0; i < numberOfFactorial; i++) {
  result *= (i+1);
  console.log(`hasil faktorial ke-${i+1} : ${result}`);
}
