//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbWays = (n) => {
  let steps = new Array(n + 2);
  steps[0] = 1;
  steps[1] = 1;
  steps[2] = 2;
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
};

console.log(`Input : n = 3
Output : ${climbWays(3)}`);
