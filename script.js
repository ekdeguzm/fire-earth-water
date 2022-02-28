playerScore = 0
computerScore = 0
choice = ''

function computerPlay() {
    // randomly generate a number
    computerNumber = Math.floor(Math.random() * 3) + 1;
    // associate number with rock, paper, or scissors
    // if the computer number is 1, return rock
    if (computerNumber === 1) {
        return "fire"; 
    }
    // if the computer number is 2, return paper
    if (computerNumber === 2) {
        return "water"; 
    }
    // if the computer number is 3, return scissors
    if (computerNumber === 3) {
        return "earth"; 
    }
};

// create a program that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // compare playerSelection and computerSelection
    if (playerSelection === "fire") {
        if (computerSelection === "water") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (computerSelection === "earth") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else {
            return console.log("Go again! " + "Computer also selected " + playerSelection);
        }
    }   else if (playerSelection === 'water') {
        if (computerSelection === "fire") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "earth") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'water') {
            return console.log("Go again! " + "Computer also selected " + playerSelection );
        }
    } else if (playerSelection === 'earth') {
        if (computerSelection === "water") {
            playerScore += 1
            return console.log("You Win! " + playerSelection + " beats " + computerSelection);
        } else if (computerSelection === "fire") {
            computerScore += 1
            return console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === 'earth') {
            return console.log("Go again! " + "Computer also selected " + playerSelection );

        }
}
};

// create buttons that result in playerSelection
const fireButton = document.getElementById("fire")
fireButton.addEventListener("click", chooseFire);

const waterButton = document.getElementById("water")
waterButton.addEventListener("click", chooseWater);

const earthButton = document.getElementById("earth")
earthButton.addEventListener("click", chooseEarth);

const buttons = document.querySelectorAll('button');

buttons.forEach()



function chooseFire() {
    choice = "fire"
    console.log(choice)
}

function chooseWater() {
    choice = "water"
    console.log(choice)
}

function chooseEarth() {
    choice = "earth"
    console.log(choice)
}

function game() {
    for (let i = 0; i < 5; i++) {
        // player presses button and that button equals players choice
        const playerChoice = choice
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

game()
