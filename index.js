// DOM eLEMENTS
var scissorbtn = document.getElementById("scissorbtn");
var paperBtn = document.getElementById("paperBtn");
var rockBtn = document.getElementById("rockBtn");

var computerSign = document.getElementById("computerSign");
var playerSign = document.getElementById("playerSign");

var score_info = document.querySelector(".score-info");
var score_message = document.querySelector(".score-message");

//player-scoreboard
var playerScoreElement = document.getElementById("playerScore");
var computerScoreElement = document.getElementById("computerScore");

// Reset Button
const resetBtn = document.querySelector("#resetBtn");
resetBtn.style.display = "none";

// even listeners
scissorbtn.addEventListener("click", () => playRound("scissors"));
paperBtn.addEventListener("click", () => playRound("paper"));
rockBtn.addEventListener("click", () => playRound("rock"));
resetBtn.addEventListener("click", resetGame);

// emoji mapping
const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

// Game State
let playerScore = 0;
let computerScore = 0;

function displaySign(playerChoice, computerChoice) {
  playerSign.textContent = getEmoji(playerChoice);
  computerSign.textContent = getEmoji(computerChoice);
}

function getEmoji(choice) {
  return emojiMap[choice];
}

function updateScoreBoard() {
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// Random Choice
function randomChoice() {
  const chooseEmoji = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  return chooseEmoji[randomIndex];
}

// Determine Winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    score_info.textContent = "it's a tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    score_info.textContent = "You Won!";
    playerScore++;
  } else {
    score_info.textContent = "You Lose!";
    computerScore++;
  }

  if (playerScore == 3 || computerScore == 3) {
    endGame();
  } else {
    score_message.textContent = `First to score 3 points wins the game!`;
  }
}

function endGame() {
  if (playerScore == 3) {
    score_message.textContent = "Congratulations! You won the game!";
  } else {
    score_message.textContent =
      "Sorry, you lost the game. Better luck next time!";
  }

  // displaying buttons
  scissorbtn.setAttribute("disabled", true);
  paperBtn.setAttribute("disabled", true);
  rockBtn.setAttribute("disabled", true);

  // display button
  resetBtn.style.display = "block";
  resetBtn.style.marginBottom = "10px";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  // reset ScoreBoard
  updateScoreBoard();

  // displaying buttons
  scissorbtn.disabled = false;
  paperBtn.disabled = false;
  rockBtn.disabled = false;

  // score-info
  score_message.textContent = `First to score 3 points wins the game!`;
  score_info.textContent = "Choose you weapon";

  // signs
  playerSign.textContent = "❔";
  computerSign.textContent = "❔";

  resetBtn.style.display = "none";
}

function playRound(playerChoice) {
  var computerChoice = randomChoice();

  displaySign(playerChoice, computerChoice);
  determineWinner(playerChoice, computerChoice);
  updateScoreBoard();
}
