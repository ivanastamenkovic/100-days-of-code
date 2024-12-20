let editedPlayer = 0;

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
const errorMsgOverlayElement = document.getElementById("error-msg-overlay");
const gameAreaElement = document.getElementById("active-game");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const closeErrorMsgBtnElement = document.getElementById("close-error-msg-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);
closeErrorMsgBtnElement.addEventListener("click", closeErrorMsgOverlay);
backdropElement.addEventListener("click", closeErrorMsgOverlay);