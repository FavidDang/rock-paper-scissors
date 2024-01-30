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

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i) {
        const playerChoice = prompt("Choose rock, paper, or scissors");
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        console.log(`Computer threw: ${computerChoice}`);
        console.log(`Result: ${result}`);

        if (result === "win") {
            ++playerScore;
        } else if (result === "loss") {
            ++computerScore;
        }

        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }

}

playGame()