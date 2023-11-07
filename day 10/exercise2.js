//Given a non-empty array of integers nums, every element appears twice except for one.
//Find that single one.

let arrSort = [];

const findSingleOne = (...arrNums) => {
  for (let i = 0; i < arrNums.length; i++) {
    const numbers = arrNums.filter((element) => element === arrNums[i]);
    if (numbers.length === 1) {
      return arrNums[i];
    }
  }
};

console.log(`Input : nums = [4,1,2,1,2]
Output : ${findSingleOne(4, 1, 2, 1, 2)}`);
