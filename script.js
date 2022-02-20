// player will be playing against the computer

// create function that will return Rock, Paper, or Scissors
// randomly generate
function computerPlay() {
    // randomly generate a number
    computerNumber = Math.floor(Math.random() * 3) + 1;
    // associate number with rock, paper, or scissors
    // if the computer number is 1, return rock
    if (computerNumber === 1) {
        return console.log('Rock'); 
    }
    // if the computer number is 2, return paper
    if (computerNumber === 2) {
        return console.log('Paper'); 
    }
    // if the computer number is 3, return scissors
    if (computerNumber === 3) {
        return console.log('Scissors'); 
    }
};

function 