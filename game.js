function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];

    const choice = choices[Math.floor(Math.random() * 3)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) { // RR, PP, SS
        return "tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") { // RP
            return "loss";
        } else { // RS
            return "win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") { // PR
            return "win";
        } else { // PS
            return "loss";
        }
    } else {
        if (computerSelection === "rock") { // SR
            return "loss";
        } else { // SP
            return "win";
        }
    }
}

function playGame(event) {

    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const playerChoice = event.target.innerText.toLowerCase();
    const computerChoice = getComputerChoice;

    const result = playRound(playerChoice, computerChoice);
    if (result === "win") {
        ++playerScore;
    } else if (result === "loss") {
        ++computerScore;
    }
    playerScoreDOM.innerText = `Player Score: ${playerScore}`;
    computerScoreDOM.innerText = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        winner.innerText = "Winner: Player";
    } else if (computerScore === 5)  {
        winner.innerText = "Winner: Computer";
    }
}

const btnList = document.querySelectorAll("button");
const playerScoreDOM = document.querySelector("#playerScore");
const computerScoreDOM = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");

btnList.forEach(function(button) {
    button.addEventListener("click", playGame);    
});

let playerScore = 0;
let computerScore = 0;
