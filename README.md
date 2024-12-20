# 100 Days of Code - Course Projects

This repository contains all the projects I have completed during [Maximilian Schwarzmüller's 100 Days of Code](https://www.udemy.com/course/100-days-of-code-web-development-bootcamp/) course. Each project is built according to the course requirements and focuses on specific concepts or skills introduced in the corresponding section.

### Notes:
- Some projects may **not be fully responsive** or may **lack certain functionalities**, as they are designed to follow the course guidelines.  
- If I make any changes or improvements beyond the original requirements, these updates will be clearly specified in the corresponding project's folder or README.

This repository serves as a learning journey and showcases my progress throughout the course. 😊

## Featured Projects

### 06 - Tic-Tac-Toe (Days 40-44)
A browser-based Tic-Tac-Toe game built during Days 40-44 of the course.

While this project follows the general structure of the course, I have added several custom functionalities and improvements:
- Replaced `alert()` with a custom modal (added to `startNewGame()`) and created `closeErrorMsgOverlay()` to close it.
- Implemented logic to check if both players have the same name and added a custom modal to display an error message.
- Implemented smooth scroll to the game area when "Start Game" is clicked, using `scrollIntoView()`.
- Updated `disabled` class to change field colors based on which player selected the field ("X" or "O").
- Added functionality to prevent page scrolling when a modal is open by adding a `no-scroll` class to the `<body>` element.
- Implemented `getLoserName()` to display the loser's name in the endgame message.

You can check out the live version of the game [here](https://maximilian-tic-tac-toe-days-40-44.netlify.app/).

You can find the source code in the [06-tic-tac-toe-days-40-44](./06-tic-tac-toe-days-40-44) directory.