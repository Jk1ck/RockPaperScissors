const computerIcon = '<i class="fa-solid fa-computer"></i>';
const intervalIcons = [computerIcon, "<p>.</p>","<p>..</p>","<p>...</p>"];
const icons = ['<i class="choiceBtns fa-solid fa-hand-back-fist"></i>',
               '<i class="choiceBtns fa-solid fa-hand"></i>',
               '<i class="choiceBtns fa-solid fa-hand-peace"></i>'];
const iconElement = document.getElementById("my-icon");

let index = 0;

setInterval(() => {
    index = (index + 1) % intervalIcons.length; 
    iconElement.innerHTML = intervalIcons[index]; 
  }, 800);



const choiceBtns = document.querySelectorAll("[data-selection]");
const resultDisplay = document.getElementById("status-bar");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

let computerChoice,
    playerChoice;

choiceBtns.forEach(button => button.addEventListener("click", e => {
    playerChoice = button.dataset.selection;
    setInterval(1);
}));


function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    if (a===0){
        return "rock";
    } else {
        if (a===1){
            return "paper";
        } else return "scissors";
    };
};

function playRound(playerChoice, computerSelection, delayTime) {
    choiceBtns.forEach(button => (button.disabled = true));

    console.log(computerSelection + " computer");
    console.log(playerChoice + " player");

    setTimeout(() => {
      if (playerChoice === computerSelection) {
        resultDisplay.textContent = "It's a tie!";
      } else if (
        (playerChoice === "rock" && computerSelection === "scissors") ||
        (playerChoice === "paper" && computerSelection === "rock") ||
        (playerChoice === "scissors" && computerSelection === "paper")
      ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.textContent = "You win!";
      } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.textContent = "Computer wins!";
      }
  
      if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if (playerScore > computerScore) {
          resultDisplay.textContent = "You win the game!";
        } else {
          resultDisplay.textContent = "Computer wins the game!";
        }
        choiceBtns.forEach(button => (button.disabled = false));
        return;
      }
  
      choiceBtns.forEach(button => (button.disabled = false));
    }, delayTime);
  }

  choiceBtns.forEach(button =>
    button.addEventListener("click", function() {
      if (gameOver) {
        return;
      }
      const computerSelection = getComputerChoice();

      
        clearInterval();
        if (computerSelection === "rock") iconElement.innerHTML = icons[0]; 
          else if (computerSelection === "paper") iconElement.innerHTML = icons[1];
            else iconElement.innerHTML = icons[2];
      

      playRound(playerChoice, computerSelection, 1000);
    })
  );
