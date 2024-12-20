function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    errorMsgNoNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    document.body.classList.add("no-scroll");
    return;
  } else if (players[0].name === players[1].name) {
    errorMsgSameNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    document.body.classList.add("no-scroll");
  } else {
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
    gameAreaElement.scrollIntoView({ behavior: "smooth" });
  }
}

function closeErrorMsgOverlay() {
  errorMsgNoNameOverlayElement.style.display = "none";
  errorMsgSameNameOverlayElement.style.display = "none";
  errorMsgDoubleSelectionElement.style.display = "none";
  backdropElement.style.display = "none";
  document.body.classList.remove("no-scroll");
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
  const selectedRow = selectedField.dataset.row - 1;
  const selectedColumn = selectedField.dataset.col - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    errorMsgDoubleSelectionElement.style.display = "block";
    backdropElement.style.display = "block";
    document.body.classList.add("no-scroll");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;

  if (activePlayer === 0) {
    selectedField.classList.add("disabled-x");
  } else if (activePlayer === 1) {
    selectedField.classList.add("disabled-o");
  }

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  switchPlayer();
}
