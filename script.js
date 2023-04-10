const compiterIcon = '<i class="fa-solid fa-computer"></i>';
const icons = [compiterIcon, "<p>.</p>","<p>..</p>","<p>...</p>"];
let index = 0;
const iconElement = document.getElementById("my-icon");

console.log(typeof(iconElement));
console.log(iconElement);

setInterval(() => {
    index = (index + 1) % icons.length; 
    iconElement.innerHTML = icons[index]; 
  }, 800);

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const statusBar = document.getElementById('status-bar');

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
    rock.addEventListener('click', () => {
        playerChoice='rock';
    });
    paper.addEventListener('click', () => {
        playerChoice='paper';
    });
    scissors.addEventListener('click', () => {
        playerChoice='scissors';
    });
    return playerChoice;
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
        // default:
        //     console.log("Invalid input");
    }
}

function game(){
    let i=1;
    let roundStatus;
    playerScore=0;
    computerScore=0;
    while (i<=5) {
        playerChoice=getPlayerChoice();
        computerChoice=getComputerChoice();
        console.log("You chose "+playerChoice+"\n Computer chose "+computerChoice);
        roundStatus=playRound(playerChoice,computerChoice);
        if (roundStatus==="player"){ 
            playerScore++;
            i++;
            statusBar.textContent='You won the round! The score is ${playerScore} - ${computerScore}';
        } else if (roundStatus==="computer"){
            computerScore++;
            i++;
            //alert("You lost the round :( The score is "+playerScore+"-"+computerScore);
          } //else alert("It's a tie! Current score:"+playerScore+"-"+computerScore);
    }
    if (playerScore>computerScore){
        alert("Congrats you won the game wowowo")
    } else alert("too bad, u lost :P")

}


game();

