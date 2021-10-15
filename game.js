function computerPlay() {
    let plays = ['rock', 'paper', 'scissors'];
    return plays[Math.round(2 * Math.random())];
}

function updateScores() {
    document.getElementById('player-score').innerText = playerWins;
    document.getElementById('computer-score').innerText = computerWins;
    document.getElementById('ties').innerText = ties;
}

function showChoice(player, computer) {
    let choice = document.getElementById('choice');
    choice.textContent = 'Player chose: ' + player + '.\n Computer chose ' + computer + '. ';
}

function checkIfWon() {
    if (playerWins == 5) {
        document.body.innerText = 'Player wons 5 games! Refresh to start another game';
    } else if (computerWins == 5) {
        document.body.innerText = 'Computer wons 5 games! Refresh to start another game';
    }
}
let playerWins = 0;
let computerWins = 0;
let ties = 0;



function game(player, computer) {
    showChoice(player, computer)
    if (player != computer) {
        if (player == 'paper' && computer == 'rock') {
            console.log(player + ' beats ' + computer + '. Player wins');
            playerWins++;
        } else if (player == 'rock' && computer == 'scissors') {
            console.log(player + ' beats ' + computer + '. Player wins');
            playerWins++;
        } else if (player == 'scissors' && computer == 'paper') {
            console.log(player + ' beats ' + computer + '. Player wins');
            playerWins++;
        } else {
            console.log(computer + ' beats ' + player + '. Computer wins');
            computerWins++;
        }
    } else {
        console.log('It\'s a tie!');
        ties++;
    }
    updateScores();
    checkIfWon();
}


const playerSelectsRock = document.querySelector('#rock');
const playerSelectsPaper = document.querySelector('#paper');
const playerSelectsScissors = document.querySelector('#scissors');

playerSelectsRock.addEventListener('click', () => {
    game(playerSelectsRock.id, computerPlay());
});
playerSelectsPaper.addEventListener('click', () => {
    game(playerSelectsPaper.id, computerPlay());
});
playerSelectsScissors.addEventListener('click', () => {
    game(playerSelectsScissors.id, computerPlay());
});