console.log("getComputerChoice: ", getComputerChoice() );
console.log("getPlayerChoice: ", getHumanChoice() );

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let input = prompt("Choose your move: Rock, Paper, or Scissors");
  return input.toLowerCase();
}

function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 100) % 3;
  switch (randomValue) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  
  let roundResult = rockPaperScissorsGame(humanChoice, computerChoice);
  let winnerName;
  let winnerChoice;
  let loserChoice;

  if (roundResult === 0) {
    console.log(`The round is a tie, there is no winner. Play again.`);
    return
  }

  if (roundResult > 1) {
    winnerName = "The Player";
    winnerChoice = humanChoice;
    loserChoice = computerChoice;
    humanScore++;
  }

  if (roundResult < 1) {
    winnerName = "The Computer";
    winnerChoice = computerChoice;
    loserChoice = humanChoice;
    computerScore++;
  }

  console.log(`${winnerName} wins! ${winnerChoice} beats ${loserChoice}`);
  return;
  
}

function rockPaperScissorsGame(move1, move2) {
  // return > 0 means game won
  // return < 0 means game lost
  // return = 0 means tie

  if (move1 === move2) {
    return 0;
  }

  switch (move1) {
    case "rock":
      if (move2 === "paper") {
        return -1;
      } else {
        return 1;
      }
    case "paper":
      if (move2 === "scissors") {
        return -1;
      } else {
        return 1;
      }
    case "scissors":
      if (move2 === "rock") {
        return -1;
      } else {
        return 1;
      }
  }
}