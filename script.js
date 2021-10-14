
function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.round(2 * Math.random())];
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function game(player, computer) {
    player = player.toLowerCase();
    if (player != computer) {
        if (player == "paper" && computer == "rock") {
            console.log(player + " beats " + computer + ". Player wins");
            playerWins++;
        } else if (player == "rock" && computer == "scissors") {
            console.log(player + " beats " + computer + ". Player wins");
            playerWins++;
        } else if (player == "scissors" && computer == "paper") {
            console.log(player + " beats " + computer + ". Player wins");
            playerWins++;
        } else {
            console.log(computer + " beats " + player + ". Computer wins");
            computerWins++;
        }
    } else {
        console.log("It's a tie!");
        ties++;
    }
}


do {
    let playerSelection = prompt("Rock, paper, or scissors? Pick one.");
    let computerSelection = computerPlay();
    game(playerSelection, computerSelection);
} while (playerWins < 5 && computerWins < 5);


if (playerWins > computerWins) {
    console.log("player won best of five");
} else {
    console.log("computer won best of five");
}

console.log("player wins: " + playerWins + "\n computer wins: " + computerWins + "\n ties: " + ties);

