//15
//game of rock, paper, scissor function that will return 'Win' or 'Lose'.
//The function will randomly pick between rock, paper, or scissor.

let arrChoice = ["rock", "paper", "scissor"];
let random1, random2;

const rockPaperScissor = (arrChoice) => {
  random1 = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  random2 = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  console.log(`${random1} vs ${random2}`);

  if (
    (random1 == "rock" && random2 == "scissor") ||
    (random1 == "paper" && random2 == "rock") ||
    (random1 == "scissor" && random2 == "paper")
  ) {
    return "Win";
  } else if (
    (random1 == "rock" && random2 == "paper") ||
    (random1 == "paper" && random2 == "scissor") ||
    (random1 == "scissor" && random2 == "rock")
  ) {
    return "Lose";
  } else {
    return "Tie";
  }
};

console.log(`-> ${rockPaperScissor(arrChoice)}`);
