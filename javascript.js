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
