
// VARIABLES

var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
var header = document.querySelector("h2");
var playerWinCount = document.querySelector(".player-win-count");
var computerWinCount = document.querySelector(".computer-win-count");

var game = new Game();

// EVENT LISTENERS

//could refactor this into one formula?
classicOption.addEventListener("click", showClassicGame);
difficultOption.addEventListener("click", showDifficultGame);

gameView.addEventListener("click", function(event) {
  playerSelectIcon(event)
});

// FUNCTIONS


//could refactor showClassicGame and showDifficultGame into one formula?
function showClassicGame() {
  game.selection = "classic"
  hideHomeView()
  displayGameIcons(game.icons.classic)
};

function showDifficultGame() {
  game.selection = "difficult"
  hideHomeView()
  displayGameIcons(game.icons.difficult)
};

function hideHomeView() {
  homeView.classList.add("hidden");
  gameView.classList.remove("hidden");
  header.innerHTML = "Choose your fighter!"
};

function displayGameIcons(array) {
  for (var i = 0; i < array.length; i++) {
    gameView.innerHTML += `<img src="./assets/` + array[i] + `.png" ` + `id ="` + array[i] + `">`;
  }
};


function playerSelectIcon(event) {
  game.player.choice = (event.target.getAttribute('id'));
  if (game.selection === "classic") {
    header.innerHTML = (game.playClassicGame())
  }
  if (game.selection === "difficult") {
    header.innerHTML = (game.playDifficultGame())
  }
  displayWins();
  console.log(game);
}

function displayWins() {
  playerWinCount.innerHTML = game.player.wins;
  computerWinCount.innerHTML = game.computer.wins;
}
