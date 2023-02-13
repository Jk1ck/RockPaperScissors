let userInput,
    computerChoice,
    playerChoice,
    playerScore,
    computerScore;

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    console.log(a);
    if (a===0){
        return "rock";
    } else {
        if (a===1){
            return "paper";
        } else return "scissors";
    }
}

function getPlayerChoice(){
    userInput = prompt("Type what you choose(Rock, Paper or Scissors):")
    return userInput.toLowerCase();
}

function playRound(playerChoice, computerChoice){
    switch (playerChoice) {
        case "rock":
            if (computerChoice==="rock") return "0"; else {
                if (computerChoice==="paper") return "computer"; else return "player";
            }
            break;
        case "paper":
            if (computerChoice==="paper") return "0"; else {
                if (computerChoice==="scissors") return "computer"; else return "player";
            }
            break;
        case "scissors":
            if (computerChoice==="scissors") return "0"; else {
                if (computerChoice==="rock") return "computer"; else return "player";
            }
            break;
        default:
            console.log("Invalid input");
    }
}

function game(){
    let i=1;
    let roundStatus;
    playerScore=0;
    computerScore=0;
    while (i<=5) {
        alert("This is round number:"+i)
        playerChoice=getPlayerChoice();
        computerChoice=getComputerChoice();
        alert("You chose "+playerChoice+"\n Computer chose "+computerChoice);
        roundStatus=playRound(playerChoice,computerChoice);
        if (roundStatus==="player"){ 
            playerScore++;
            i++;
            alert("You won the round! The score is "+playerScore+"-"+computerScore);
        } else if (roundStatus==="computer"){
            computerScore++;
            i++;
            alert("You lost the round :( The score is "+playerScore+"-"+computerScore);
          } else alert("It's a tie! Current score:"+playerScore+"-"+computerScore);
    }
    if (playerScore>computerScore){
        alert("Congrats you won the game wowowo")
    } else alert("too bad, u lost :P")

}


alert("Hello! You are playing a game of Rock, Paper, Scissors.");
game();

