// player will be playing against the computer

// create function that will return Rock, Paper, or Scissors
// randomly generate
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
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (computerSelection === "scissors") {
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else {
            console.log("Go again! " + "Computer also selected " + playerSelection);
            const playerChoice = prompt("Choose your weapon: rock, paper, or scissors?");
            console.log("You have chosen " + playerChoice + "..");
            console.log(playRound(playerChoice, computerChoice));
        }
    }   else if (playerSelection === 'scissors') {
        if (computerSelection === "paper") {
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "rock") {
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'scissors') {
            console.log("Go again! " + "Computer also selected " + playerSelection );
            const playerChoice = prompt("Choose your weapon: rock, paper, or scissors?");
            console.log("You have chosen " + playerChoice + "..");
            console.log(playRound(playerChoice, computerChoice));
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "scissors") {
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'paper') {
            console.log("Go again! " + "Computer also selected " + playerSelection );
            const playerChoice = prompt("Choose your weapon: rock, paper, or scissors?")
            console.log("You have chosen " + playerChoice + "..")
            console.log(playRound(playerChoice, computerChoice));
        }
}
};

console.log("Aliens have landed on Earth and demand a game of rock paper scissors from a worthy opponent.")
console.log("You are the chosen one..")
const playerChoice = prompt("Choose your weapon: rock, paper, or scissors?")
console.log("You have chosen " + playerChoice + "..")
const computerChoice = computerPlay()

console.log(playRound(playerChoice, computerChoice));
