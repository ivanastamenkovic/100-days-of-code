function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    errorMsgNoNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
    return;
  } else if (players[0].name === players[1].name) {
    errorMsgSameNameOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
  } else {
    gameAreaElement.style.display = "block";
    gameAreaElement.scrollIntoView({ behavior: "smooth" });
  }
}

function closeErrorMsgOverlay() {
  errorMsgNoNameOverlayElement.style.display = "none";
  errorMsgSameNameOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}
