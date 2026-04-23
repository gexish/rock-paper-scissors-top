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