# Play Battleship

This project is a blunt game of battleship. After initialising a game, a user is prompted to enter a guess.
The guess is then validated and responses and further guesses are exhanged until the targeted batthleship has been sunk (hit 3 times). 

## Initial setup
- Locally clone a version to play the game or add functionality to the project.
  `$ git clone https://github.com/phHank/battleship.git`

## Dependencies

- A modern web browser, for example, Chrome, MS Edge or Firefox. This programme did not work with IE v11 when tested. 
     
## Play the game

- After cloning and saving the files locally, open battleship.html in your web browser and follow the onscreen instructions. 

## Potential Improvements

- I have taken this project as far as I would like, however, you may want to take it further: 
    - You could take the game logic and expand it to include a larger range of guesses or include other battleships to target in a bigger field.
    - Instead of bluntly prompting a user for inputs, you can imbed a html form with relevant input field(s). 
    - You could change from a one dimensional x7 range to a 7x7 or 10x10 clickable grid. 
    - Record the session's high score and also dynamically display the current ongoing game's score. 
    - You could use ReactJS to implement the above suggestions. 
    - Improve the styling.
    - Fix a known bug: When a user inputs null or 0 as a guess it cancels the ongoing game. 
