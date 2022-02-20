// player will be playing against the computer

// create function that will return Rock, Paper, or Scissors
function computerPlay() {
    // randomly generate a number
    computerNumber = Math.floor(Math.random() * 3) + 1;
    // associate number with rock, paper, or scissors
    // if the computer number is 1, return rock
    if (computerNumber === 1) {
        return "rock"; 
    }
    // if the computer number is 2, return paper
    if (computerNumber === 2) {
        return "paper"; 
    }
    // if the computer number is 3, return scissors
    if (computerNumber === 3) {
        return "scissors"; 
    }
};

// create a program that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // compare playerSelection and computerSelection
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (computerSelection === "scissors") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else {
            return console.log("Go again! " + "Computer also selected " + playerSelection);
        }
    }   else if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "rock") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'scissors') {
            return console.log("Go again! " + "Computer also selected " + playerSelection );
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "scissors") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'paper') {
            return console.log("Go again! " + "Computer also selected " + playerSelection );

        }
}
};

// we want to have a max of five rounds, keeps score, and reports a winner at the end
// create function to track rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log("This is game " + (i + 1));
        const playerChoice = window.prompt("Choose your weapon: rock, paper, or scissors?").toLowerCase();
        console.log("You have chosen " + playerChoice + "..");
        const computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log("\n")
    }
    if (computerScore > playerScore) {
        console.log("You have lost the game! The world ends.")
    } else if (playerScore > computerScore) {
        console.log("You have saved humanity! You Win!");
    } else {
        console.log("The game is a tie. Rematch.");
        }
    }

playerScore = 0
computerScore = 0

console.log("Aliens have landed on Earth and demand a game of rock paper scissors from a worthy opponent.")
console.log("You are the one humanity choses..")
console.log("\n")
game()
