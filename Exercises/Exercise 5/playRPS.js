// randomly return either 'rock', 'paper', or 'scissors'

function computerSelection() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playerSelection() { 
    var ask = prompt("Rock, Paper, or Scissors?");
    return ask;
}


function playRound(playerSelection, computerSelection) {
    if playerSelection == "rock" && computerSelection == "rock" {
        return "It's a tie!"
    } else if playerSelection == "rock" && computerSelection == "paper" {
        return "You lose!"
    } else if playerSelection == "rock" && computerSelection == "scissors" {
        return "You win!"
    } else if playerSelection == "paper" && computerSelection == "rock" {
        return "You win!"
    } else if playerSelection == "paper" && computerSelection == "paper" {
        return "It's a tie!"
    } else if playerSelection == "paper" && computerSelection == "scissors" {
        return "You lose!"
    } else if playerSelection == "scissors" && computerSelection == "rock" {
        return "You lose!"
    } else if playerSelection == "scissors" && computerSelection == "paper" {
        return "You win!"
    } else if playerSelection == "scissors" && computerSelection == "scissors" {
        return "It's a tie!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Rock, Paper, or Scissors?");
        var computerSelection = computerSelection();
        var result = playRound(playerSelection, computerSelection);
        alert(result);
    }
}