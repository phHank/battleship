// declare random locations of single battleship
document.querySelector(':root').onclick = function () {
    const location1 = Math.floor(((Math.random()) * 5) + 1);
    const location2 = location1 + 1;
    const location3 = location1 + 2;

    let userGuess;

    let guesses = [];
    let hits = 0;
    let sunk = false;

    while (sunk === false) { 
        userGuess = Math.floor(prompt('Please enter your target (any number between 1 and 7):'));
        
        if(userGuess === 0) {
            alert('Game Cancelled!');
            break;
        } else {
            userGuess = Number(userGuess);
        }

        if (userGuess < 1 || userGuess > 7 || Number.isNaN(Number(userGuess))) {
            alert('That was off the grid!!! Please enter a number between 1 and 7 only:');
        } else if (guesses.indexOf(userGuess) !== -1) {  
            alert(`${userGuess} has already been targeted, try another number between 1 and 7:`);
        } else if (userGuess === location1 || userGuess === location2 || userGuess === location3) {
            guesses.push(userGuess);
            hits += 1;
            alert('Direct Hit!')
            if (hits === 3) {
                sunk = true;
                alert(`You sunk the battship with ${guesses.length} valid guesses!`);
            } 
        } else {
            guesses.push(userGuess);
            alert('Miss, try again!');
        };
    }
}
