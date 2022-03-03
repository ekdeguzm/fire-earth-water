let playerLives = 5
let computerLives = 5
let numberOfGames = 0
let playerChoice
let computerChoice
const selection = document.querySelector("#selection")
const results = document.querySelector("#results")
const yourLivesLeft = document.querySelector("#yourLivesLeft")
const computerLivesLeft = document.querySelector("#computerLivesLeft")

const setText = (element, string) => {
    element.textContent = string
}

const winner = (player) => {
    if (player === "human") {
        computerLives -= 1
        setText(results, "You Win! " + playerChoice + ' beats ' + computerChoice);
        setText(yourLivesLeft, "Your Lives: " + playerLives);
        setText(computerLivesLeft, "Computer Lives: " + computerLives);
    } 
    if (player === "computer") {
        playerLives -= 1
        setText(results, "You Lose! " + computerChoice + ' beats ' + playerChoice);
        setText(yourLivesLeft, "Your Lives: " + playerLives);
        setText(computerLivesLeft, "Computer Lives: " + computerLives);
    
    } 
    if (player === "tie") {
        setText(results, "It's a tie! Computer has also selected " + playerChoice);
    }
    numberOfGames += 1;
    
}

function computerPlay() { 
    const elementChoices = ["Fire", "Water", "Earth"]
    computerNumber = Math.floor(Math.random() * elementChoices.length);
    return elementChoices[computerNumber]
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Fire") {
        if (computerSelection === "Water") {
            winner("computer")
            setText(selection, "You shoot out a burst of fire. The computer jets out stream of water.")
        } else if (computerSelection === "Earth") {
            winner("human")
            setText(selection, "A fire tornado appears from your hands. The computer throws blades of grass towards you.")
        } else {
            winner("tie")
            setText(selection, "You shoot out a burst of flames. The computer counters with flames as well.")
        }
    } else if (playerSelection === "Water") {
        if (computerSelection === "Fire") {
            winner("human")
            setText(selection, "You shoot out a jet of water. The computer hurls flames at you.")
        } else if (computerSelection === "Earth") {
            winner("computer")
            setText(selection,"You shoot out a jet of water. The computer throws blades of grass at you.")
        } else {
            winner("tie")
            setText(selection, "You shoot out a jet of water. The also streams a jet of water.")
        }
    } else if (playerSelection === 'Earth') {
        if (computerSelection === "Water") {
            winner("human")
            setText(selection, "You shoot blades of grass from your palms. The computer streamlines water at you.")
        } else if (computerSelection === "Fire") {
            winner("computer")
            setText(selection, "You shoot blades of grass from your palms. The computer hurls flames at you.")
        } else {
            winner("tie")
            setText(selection, "You shoot blades of grass from your palms. The computer also aims grass at you.")

        }
    }
games.textContent = "Number of games: " + numberOfGames; 
};

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
        checkLives(playerLives, computerLives);
    })
});

function checkLives(playerLives, computerLives) {
    if (computerLives == 0) {
        setText(results, "You beat the computer. Congratulations!");
        alert("You beat the computer. Congratulations!\n\nNew Game?")
        reset()
        location.reload()
    } else if (playerLives == 0) {
        setText(results, "You have perished at the hands of the computer.");
        alert("You have perished at the hands of the computer.\n\nNew Game?")
        reset()
        location.reload()
    }
}

function reset() {
    computerLives = 0
    playerLives = 0
}
