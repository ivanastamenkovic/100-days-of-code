function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    errorMsgNoNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    return;
  } else if (players[0].name === players[1].name) {
    errorMsgSameNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
  } else {
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
    gameAreaElement.scrollIntoView({ behavior: "smooth" });
  }
}

function closeErrorMsgOverlay() {
  errorMsgNoNameOverlayElement.style.display = "none";
  errorMsgSameNameOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  selectedField.textContent = players[activePlayer].symbol;

  if (activePlayer === 0) {
    selectedField.classList.add("disabled-x");
  } else if (activePlayer === 1) {
    selectedField.classList.add("disabled-o");
  }

  switchPlayer();
}
