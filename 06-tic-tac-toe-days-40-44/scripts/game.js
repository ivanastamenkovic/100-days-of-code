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
  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
    const loserName = getLoserName(winnerId);
    loserPlayerNameElement.textContent = loserName;
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // checking the rows for equality
  for (let i = 0; i < 3; i++)
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }

  // checking the columns for equality
  for (let i = 0; i < 3; i++)
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }

  // checking the diagonal for equality (top left - bottom right)
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // checking the diagonal for equality (bottom left - top right)
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  // checking for a draw
  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    winnerPlayerNameElement.textContent = winnerName;
  } else {
    gameOverElement.textContent = "It is a draw! Are you ready for a new game?";
  }
}

function getLoserName(winnerId) {
  if (winnerId === 1) {
    return players[1].name;
  } else if (winnerId === 2) {
    return players[0].name;
  } else {
    return null;
  }
}