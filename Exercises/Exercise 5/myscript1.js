
// Naming User and Computer Score to update
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');

// Naming User buttons to add event listeners
const rockButton = document.querySelector('[data-rock]');
const paperButton = document.querySelector('[data-paper]');
const scissorsButton = document.querySelector('[data-scissors]');
 
// Naming Computer buttons to add event listeners
const computerRock = document.querySelector('[data-computer-rock]');
const computerPaper = document.querySelector('[data-computer-paper]');
const computerScissors = document.querySelector('[data-computer-scissors]');

// Naming and Placing the results of each round
const userContainer = documnet.querySelector('.user-container');
const gameWrapper = document.querySelector('.game-wrapper');

// Creating an Array for making a turn log
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog.classList.add('round-result');
gameWrapper.insertAdjacentElement('beforeend', resultsLog);

// Creating a button to refresh a page
const newGame = document.createElement('div');
newGame.textContent = 'Play Again';
newGame.classList.add('button', 'refresh');

//Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

//A new result will appear at the top of the log for each turn
function gameLog() {
    var li = document.createElement('li');
    li.textContent = resultsArray['${resultsArray.length - 1}'];
    resultsLog.insertAdjacentElement('afterbegin', li);
}

// Creating a equally random outcome - rock, paper, scissors
function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0 ) {
        return 'rock';
    if (number % 3 === 1 ) {
        return 'paper';
    }
    return 'scissors';
    }
}

// Adding animation to the Computers 'Button'
function computerColor(computerSelection) {
    if (computerSelection === 'rock') {
        removeColor();
        computerRock.classList.add('computerPick');
    }
    if (computerSelection === 'paper') {
        removeColor();
        computerPaper.classList.add('computerPick');
    }
    if (computerSelection === 'scissors') {
        removeColor();
        computerScissors.classList.add('computerPick');
    }
}

//Removing color from the Computers 'Button'
function removeColor() {
    computerRock.classList.remove('computerPick');
    computerPaper.classList.remove('computerPick');
    computerScissors.classList.remove('computerPick');
}

//Removing color from the Users 'Button'
function removeUserColor(){
    rockButton.classList.remove('userPick');
    paperButton.classList.remove('userPick');
    scissorsButton.classList.remove('userPick');
}


// Adding :hover state to Users 'Button'
function userHover() {
    if (playerScore <= 4 && computerScore <= 4) {
        this.classList.add('userHover');
    }
}

//Removing :hover state from Buttons
function removeHover() {
    this.classList.remove('userHover');
}

function playGame(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();
    removeUserColor(); //Removes any current animation
    this.classList.add('userClick'); //Adds new button animation
    if  (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' &&
                    computerSelection === 'paper' &&
                (computerScore <= 5 || playerScore <= 5))
    ) {
        playerScore++;
        resultsArray.push('You won round #${roundNum}: ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}.');
        userScore.textContent = '${playerScore}';  //Updates the User Score
        if (playerScore >= 5) {
            resultsArray.push('YOU WON! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}.');
            rockButton.removeEventListener('click', playGame);
            paperButton.removeEventListener('click', playGame);
            scissorsButton.removeEventListener('click', playGame);
            resultsLog.insertAdjacentElement('beforebegin', newGame);
    }
    
        
    }
    )
}