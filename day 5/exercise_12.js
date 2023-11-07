//12
//function from a given array of numbers and return the second smallest number

let numbers = [5, 3, 1, 7, 2, 6];

const secondSmallest = (numbers) => {
    const arrSort = numbers.sort((a,b) => a-b);
    return arrSort[1];
}

console.log(`numbers = ${numbers} -> ${secondSmallest(numbers)}`);