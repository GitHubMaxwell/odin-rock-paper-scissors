// main
playGame();

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

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  let playRound = (humanChoice, computerChoice) => {
    // return > 0 means human has won
    // reutnr = 0 means tie
    // return < 0 means computer has won
    let roundWinner;
    let winnerChoice;
    let loserChoice;
    
    let roundResult = rockPaperScissorsGame(humanChoice, computerChoice);

    if (roundResult === 0) {
      console.log(`The round is a tie, there is no winner. Play again.`);
      return
    }

    if (roundResult > 0) {
      roundWinner = "The Player";
      winnerChoice = humanChoice;
      loserChoice = computerChoice;
      console.log(`${roundWinner} wins! ${winnerChoice} beats ${loserChoice}`);
      return 1;
    }

    if (roundResult < 0) {
      roundWinner = "The Computer";
      winnerChoice = computerChoice;
      loserChoice = humanChoice;
      console.log(`${roundWinner} wins! ${winnerChoice} beats ${loserChoice}`);
      return -1
    }
  }

  while (humanScore + computerScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let roundResult = playRound(humanChoice, computerChoice);
    if (roundResult > 0) {
      humanScore++;
    }
    if (roundResult < 0) {
      computerScore++;
    }
  }

  let gameWinner = (humanScore > computerScore)? "The Player" : "The Computer";
  let winnerScore = (humanScore > computerScore)? humanScore : computerScore;
  console.log(`${gameWinner} has won ${winnerScore}/5 rounds and therefore is the game winner!`);

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