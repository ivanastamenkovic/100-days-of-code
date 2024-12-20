# Tic-Tac-Toe Game (Days 40-44)

This is a browser-based **Tic-Tac-Toe** game project created as part of the **100 Days of Code** course. 
It follows the course code but also includes several custom features and improvements that I added.

You can play the game [here](https://maximilian-tic-tac-toe-days-40-44.netlify.app/).

### Custom Features and Modifications

Below is a list of all the custom features and modifications I have implemented so far:
- Replaced `alert()` with a custom modal (added to `startNewGame()`) and created `closeErrorMsgOverlay()` to close it.
- Implemented logic to check if both players have the same name and added a custom modal to display an error message.
- Implemented smooth scroll to the game area when "Start Game" is clicked, using `scrollIntoView()`.
- Updated `disabled` class to change field colors based on which player selected the field ("X" or "O").
- Added functionality to prevent page scrolling when a modal is open by adding a `no-scroll` class to the `<body>` element.
- Implemented `getLoserName()` to display the loser's name in the endgame message.

The game is now complete, and you can start playing! Visit the [link](https://maximilian-tic-tac-toe-days-40-44.netlify.app/) to try it out.
