// Depending on the result of RandomComputerChoice choose either rock,paper or scissors.

// Issue with "randomComputerChoice" it only makes a random variable once need to figure out how to have it done multiple times.

// Fixed it by having the randomComputerChoice variable declared inside of the function.

function getComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * 3);

  switch (randomComputerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// My playRound() function prompts the player for their choice, and uses the random computer selection.
let computerWins = 0;
let playerWins = 0;
let ties = 0;
let roundsPlayed = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      "You lose!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      computerWins++,
      roundsPlayed++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
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
      ties++;
    roundsPlayed++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      "You lose!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      computerWins++,
      roundsPlayed++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      "You won!" + ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      playerWins++,
      roundsPlayed++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(
      "You tied!" +
        ` Computer: ${computerSelection} & Human: ${playerSelection}`
    ),
      ties++;
    roundsPlayed++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
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
      ties++;
    roundsPlayed++;
  } else {
    console.log("Please type a valid choice");
  }
  changeComputerColor((computer = computerSelection));
}

// function to update the score

//Player Score

const scoreBoard = document.querySelector("div.playerScoreBoard");
const playerScore = document.createElement("p");
playerScore.classList.add("score");
playerScore.textContent = "Score: 0";

scoreBoard.appendChild(playerScore);

// Computer score

const computerScoreBoard = document.querySelector("div.computerScoreBoard");
const computerScore = document.createElement("p");
computerScore.classList.add("score");
computerScore.textContent = "Score: 0";

computerScoreBoard.appendChild(computerScore);

// Ties

const tieScoreBoard = document.querySelector(".titleSection");

const tieScore = document.createElement("p");
tieScore.classList.add("ties");
tieScore.textContent = "Ties: 0";

tieScoreBoard.appendChild(tieScore);

function updateScores() {
  playerScore.textContent = `Score: ${playerWins}`;
  computerScore.textContent = `Score: ${computerWins}`;
  tieScore.textContent = `Ties: ${ties}`;
}

// This function runs once the rounds played reach 5 and selects a winner depending on who wins the most rounds.

const finalWinner = document.createElement("div");
finalWinner.textContent = `${getFinalWinner}`;

function getFinalWinner() {
  const finalScore = document.querySelector(".finalScore");

  if (computerWins === 5) {
    window.location.href = "computerWins.html";
    finalScore.textContent = `Final Score Player ${playerWins} & Computer ${computerWins} !`;
  } else if (playerWins === 5) {
    window.location.href = "playerWins.html";
    finalScore.textContent = `Final Score Player ${playerWins} & Computer ${computerWins} !`;
  }
}

// Adds sound to the game when the player clicks on one of his choices.

const audio = document.querySelector(".clickSound");

function clickSound() {
  audio.currentTime = 0; // rewind audio to the start
  audio.play();
}

// Change colors on choice made

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

function changePlayerColor(e) {
  if (e.target.classList.contains("rock")) {
    rock.classList.add("playerChoiceMade");
    paper.classList.remove("playerChoiceMade");
    scissors.classList.remove("playerChoiceMade");
  } else if (e.target.classList.contains("paper")) {
    paper.classList.add("playerChoiceMade");
    rock.classList.remove("playerChoiceMade");
    scissors.classList.remove("playerChoiceMade");
  } else if (e.target.classList.contains("scissors")) {
    scissors.classList.add("playerChoiceMade");
    paper.classList.remove("playerChoiceMade");
    rock.classList.remove("playerChoiceMade");
  }
}

// Same color function but for the computer choices

let computerRock = document.querySelector(".compuRock");
let computerPaper = document.querySelector(".compuPaper");
let computerScissors = document.querySelector(".compuScissors");

function changeComputerColor(computer) {
  if (computer === "rock") {
    computerRock.classList.add("computerChoiceMade");
    computerPaper.classList.remove("computerChoiceMade");
    computerScissors.classList.remove("computerChoiceMade");
  } else if (computer === "paper") {
    computerPaper.classList.add("computerChoiceMade");
    computerRock.classList.remove("computerChoiceMade");
    computerScissors.classList.remove("computerChoiceMade");
  } else if (computer === "scissors") {
    computerScissors.classList.add("computerChoiceMade");
    computerPaper.classList.remove("computerChoiceMade");
    computerRock.classList.remove("computerChoiceMade");
  }
}

// Targets the buttons for the game with the class of playButtons.

function playGame(e) {
  if (e.target.classList.contains("rock")) {
    playerSelection = "rock";
  } else if (e.target.classList.contains("paper")) {
    playerSelection = "paper";
  } else if (e.target.classList.contains("scissors")) {
    playerSelection = "scissors";
  } else {
    return;
  }
  changePlayerColor(e);

  playRound(playerSelection, (computerSelection = getComputerChoice()));

  // restartGame();
  updateScores();
  clickSound();
  getFinalWinner();
  e.stopPropagation(); // Stops the game from clicking on all the choices with the class of the choice
}

// This adds an event listener to all of the buttons on the page.

const playButton = document.querySelectorAll(".player");

playButton.forEach((btn) => {
  btn.addEventListener("click", playGame);
});

// Building the div to output results
