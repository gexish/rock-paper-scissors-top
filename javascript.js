function computerChoice() {
    let getComputerChoice =  Math.random();
    if (getComputerChoice <= 1/3) {
        return "rock";
    } else if (getComputerChoice <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function humanChoice() {
    let getHumanChoice = prompt("Rock, paper or scissors? Make your choice.");
    if (getHumanChoice === null) {
        alert("Oh, are you going to run away?");
        return;
    }
    if (getHumanChoice.toLowerCase()  === "rock") {
        return "rock";
    } else if (getHumanChoice.toLowerCase()  === "paper") {
        return "paper";
    } else if (getHumanChoice.toLowerCase()  === "scissors") {
        return "scissors";
    } else {
        alert("Please input one of the valid alternatives.");
        return;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log(`You won this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`You won this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log(`You won this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log(`You lost this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log(`You lost this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log(`You lost this round. Score: You ${humanScore} x ${computerScore} Computer`);
        } else if (humanChoice === computerChoice) {
            console.log(`It's a tie! Score: You ${humanScore} x ${computerScore} Computer`);
        }
    }
    
    playRound(humanChoice(), computerChoice());
    playRound(humanChoice(), computerChoice());
    playRound(humanChoice(), computerChoice());
    playRound(humanChoice(), computerChoice());
    playRound(humanChoice(), computerChoice());
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over, pal. Better luck next time.");
    } else if (humanScore === computerScore && humanScore != 0) {
        console.log("Looks like it ended in a tie. Refresh to try again.");
    } else {
        console.log("Huh? I thought you wanted to play...");
    }
}

    