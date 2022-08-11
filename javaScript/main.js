const overlay = document.querySelector(".overlay");
const winnerWindow = document.querySelector(".win-lose_window");
const playAgainBtn = document.getElementById("play_again_btn");
const winnerDecl = document.getElementById("winner_stt");

const keepTrackScore = document.getElementById("keep_track_score");
const playerScore = document.getElementById("player_score");
const computerScore = document.getElementById("computer_score");
const moveContainer = document.querySelector(".make_ur_move");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sesior = document.querySelector(".scissors");
const allChoices = document.querySelectorAll(".choice");

const selectionBtns = document.querySelectorAll("[dataSelection");

let choices = ["Rock", "Paper", "Scissors"];

let plyGameCount = 0;
let machineGameCount = 0;

const playGame = function () {
  selectionBtns.forEach((el) => {
    el.addEventListener("click", (mov) => {
      mov = el.getAttribute("dataSelection");

      //*player Movement
      let player = mov;
      //* Computer Movement
      let ch = Math.floor(Math.random() * 3);
      let machine = choices[ch];

      const displayScore = () => {
        console.log(
          `Player score : ${plyGameCount}  Computer score : ${machineGameCount}`
        );
      };
      const showResualt = () => {
        playerScore.textContent = plyGameCount;
        computerScore.textContent = machineGameCount;
      };

      if (player == machine) {
        console.log("It a draw !!😫");
        keepTrackScore.textContent = "It a draw !!😫";
        displayScore();
        showResualt();
      }

      if (player == "Paper" && machine == "Rock") {
        plyGameCount++;
        displayScore();
        showResualt();

        console.log(`${player} beats ${machine} You won 😍`);
        keepTrackScore.textContent = `${player} beats ${machine} You won 😍`;
      } else if (player == "Rock" && machine == "Paper") {
        machineGameCount++;
        displayScore();
        showResualt();

        console.log(`${machine} beats ${player} You lose 😥`);
        keepTrackScore.textContent = `${machine} beats ${player} You lose 😥`;
      }

      if (player == "Scissors" && machine == "Paper") {
        console.log(`${player} beats ${machine} You won 😍`);
        keepTrackScore.textContent = `${player} beats ${machine} You won 😍`;

        plyGameCount++;
        displayScore();
        showResualt();
      } else if (player == "Paper" && machine == "Scissors") {
        machineGameCount++;
        displayScore();
        showResualt();

        console.log(`${machine} beats ${player} You lose 😥`);
        keepTrackScore.textContent = `${machine} beats ${player} You lose 😥`;
      }

      if (player == "Rock" && machine == "Scissors") {
        console.log(`${player} beats ${machine} You won 😍`);
        keepTrackScore.textContent = `${player} beats ${machine} You won 😍`;

        plyGameCount++;
        displayScore();
      } else if (player == "Scissors" && machine == "Rock") {
        machineGameCount++;
        displayScore();

        console.log(`${machine} beats ${player} You lose 😥`);
        keepTrackScore.textContent = `${machine} beats ${player} You lose 😥`;
      }

      if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        overlay.style.display = "block";
        winnerWindow.style.display = "block";
      }
      if (playerScore.textContent == 5) {
        winnerDecl.textContent = "CONGRATS YOU WON THE GAME 🥇🥇";
      }
      if (computerScore.textContent == 5) {
        winnerDecl.textContent = "YOU LOSET TRY HARDER NEXT TIME 😓😓 ";
      }
      playAgainBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        winnerWindow.style.display = "none";
        plyGameCount = 0;
        machineGameCount = 0;
        computerScore.textContent = 0;
        playerScore.textContent = 0;
        keepTrackScore.textContent = "First to win 5 rounds wins the Game 🏆";
      });
    });
  });
};
playGame();
