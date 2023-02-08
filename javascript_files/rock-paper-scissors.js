// Depending on the result of RandomComputerChoice choose either rock,paper or scissors.

// Issue with "randomComputerChoice" it only makes a random variable once need to figure out how to have it done multiple times.

// Fixed it by having the randomComputerChoice variable declared inside of the function.

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * 10) + 1;

  if (randomComputerChoice > 6) {
    return "scissor";
  } else if (randomComputerChoice > 3) {
    return "paper";
  } else {
    return "rock";
  }
}

// My playRound() function prompts the player for their choice, and uses the random computer selection.

let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 0;

function playRound(
  playerSelection = prompt("Make a choice?,rock,paper,scissor").toLowerCase(),
  computerSelection = getComputerChoice()
) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      "You lose!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      computerWins++,
      roundsPlayed++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log(
      "You won!" + ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      playerWins++,
      roundsPlayed++;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log(
      "You tied!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      roundsPlayed++;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log(
      "You lose!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      computerWins++,
      roundsPlayed++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log(
      "You won!" + ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      playerWins++,
      roundsPlayed++;
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    console.log(
      "You tied!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      roundsPlayed++;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log(
      "You lose!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      computerWins++,
      roundsPlayed++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      "You won!" + ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      playerWins++,
      roundsPlayed++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(
      "You tied!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      roundsPlayed++;
  } else {
    console.log("Please type a valid choice"), roundsPlayed++;
  }
}

// This function runs once the rounds played reach 5 and selects a winner depending on who wins the most rounds.

function getFinalWinner() {
  if (computerWins > playerWins && roundsPlayed === 5) {
    console.log(
      `The Computer beat Mankind, Computer: ${computerWins} Mankind: ${playerWins}`
    );
  } else if (playerWins > computerWins && roundsPlayed === 5) {
    console.log(
      `Humankind wins the battle , Computer: ${computerWins} Mankind: ${playerWins}`
    );
  } else if (playerWins == computerWins && roundsPlayed === 5) {
    console.log(
      `The battle was a tie , Computer: ${computerWins} Mankind: ${playerWins}`
    );
  }
}

// This function makes the game happen by combining other functions.

function game() {
  let i = 0;

  for (i = 0; i < 5; i++) {
    playRound();
    getFinalWinner();
    // console.log("Rounds " + i);
  }
}
