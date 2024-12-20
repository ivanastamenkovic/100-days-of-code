const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const inputPlayerNameElement = document.getElementById("playername");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const errorMsgNoNameOverlayElement =
  document.getElementById("error-msg-no-name");
const errorMsgSameNameOverlayElement = document.getElementById(
  "error-msg-same-name"
);
const errorMsgDoubleSelectionElement = document.getElementById(
  "error-msg-double-selection"
);
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerPlayerNameElement = document.getElementById("winner-player-name");
const loserPlayerNameElement = document.getElementById("loser-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const closeErrorMsgBtnElements = document.getElementsByClassName(
  "close-error-msg-btn"
);

const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (let closeErrorMsgBtnElement of closeErrorMsgBtnElements) {
  closeErrorMsgBtnElement.addEventListener("click", closeErrorMsgOverlay);
}

backdropElement.addEventListener("click", closeErrorMsgOverlay);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
