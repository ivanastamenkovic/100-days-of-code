function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    errorMsgOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    return;
  }

  gameAreaElement.style.display = "block";
}

function closeErrorMsgOverlay() {
  errorMsgOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}
