function computerPlay() {
    const array = ['rock', 'paper', 'scissor'];
    let computerChoice = "";
    let selectNumber = Math.floor(Math.random() * 3);
    computerChoice = array[selectNumber];
    return computerChoice;
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    //Rock > scissor, scissor > paper , paper> rock
    // playerSelection = playerSelection.toLowerCase(); //commented for playerSelect function

    console.log(`Player choice "${playerSelection.toUpperCase()}" and computer choice is "${computerSelection.toUpperCase()}"`);
    if (playerSelection == computerSelection) {
        console.log("TIE");
        tie++;
        winnerCheck();
        updateScore();
        return "Its a Tie";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        console.log("COMPUTER WINS");
        computerScore++;
        winnerCheck();
        updateScore();
        return "Lost";
    } else {
        console.log(`${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        console.log("PLAYER WINS");
        playerScore++;
        winnerCheck();
        updateScore();
        return "Win";
    }
}

function updateScore() {
    //console.log("updating score ....");
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("tie").textContent = tie;
}

function winnerCheck() {
    console.log(`Player score = ${playerScore} and Computer score = ${computerScore} and tie = ${tie}`);
    if((playerScore === 5)||(computerScore
         === 5)){
        result.style.display = 'block';
        if(playerScore === 5){
            document.getElementById("winner").textContent = "YAY! YOU WIN!"
        }else{
            document.getElementById("winner").textContent = "Computer Wins"
        }
        playerScore = 0;
        computerScore = 0;
        tie = 0;
    }else{
         result.style.display = 'none';
    }
}

let playerScore = 0;
let computerScore = 0;
let tie = 0;
let winner = '';
let result = document.getElementById("result");
//console.log("result :" + result)


