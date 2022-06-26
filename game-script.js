const myArray = ["rock", "paper", "scissors"];


function computerPlay(){
return myArray[Math.floor(Math.random()*myArray.length)];
}


let computerChoice = computerPlay();
let playerChoice //= prompt("Rock, Paper or scissors?");


function playRound(playerChoice, computerChoice){
    computerChoice = computerPlay().toLowerCase();
    playerChoice = prompt("Rock, Paper or scissors?").toLowerCase();
    if (playerChoice == computerChoice){
    result = "Round number " + roundNumber + "\nIt's a tie, play again";
    } else if (
        (playerChoice === "rock" && computerChoice == "scissors") ||
        (playerChoice === "scissors" && computerChoice == "paper") ||
        (playerChoice === "paper" && computerChoice == "rock")
    ){result = "Round number " + roundNumber + "\nYou win because " + playerChoice + 
            " beats " + computerChoice,playerScore++} else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ){result = "Round number " + roundNumber + "\nYou lost because " + computerChoice + 
            " beats " + playerChoice,
    computerScore++} else {result = "Choice not valid, you lost your turn"}

    console.log(result, "\ncomputer score: " + computerScore, "\nplayer score: " + playerScore);
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function playGame(){
for (let i = 0; i < 5; i++){
    playRound(playerChoice, computerChoice);
    roundNumber++;
}
}

function showScore(playerScore, computerScore){
    if (playerScore > computerScore){
        return "GAME OVER.\nPlayer wins with " + playerScore+" points, " + 
            "congratulations!"
    } else {return "GAME OVER.\nComputer wins with " + computerScore+" points, " + 
            "better luck next time!"}
}

console.log(playGame());
console.log(showScore(playerScore, computerScore));

// OLD CODE

 /*else if (playerChoice == "rock" && computerChoice == "scissors"){
        result = ("You win because " + playerChoice + " beats " + computerChoice);
        playerScore++
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        result = ("You win because " + playerChoice + " beats " + computerChoice)
        playerScore++
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        result = ("You win because " + playerChoice + " beats " + computerChoice);
        playerScore++*/