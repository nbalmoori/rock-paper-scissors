
// VARIABLES

var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
var title = document.querySelector("h1");
var header = document.querySelector("h2");
var playerWinCount = document.querySelector(".player-win-count");
var computerWinCount = document.querySelector(".computer-win-count");
var newGameButton = document.querySelector("button")

var game = new Game();

var logMe = function() {
  console.log("I will run after 2 seconds");
}

// EVENT LISTENERS

//could refactor the first two into one formula?
classicOption.addEventListener("click", showClassicGame);
difficultOption.addEventListener("click", showDifficultGame);
newGameButton.addEventListener("click", showHomeView)
title.addEventListener("click", resetGame)
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
  gameView.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    gameView.innerHTML += `<img src="./assets/` + array[i] + `.png" class="game-icons"` + `id ="` + array[i] + `">`;
  }
};

function playerSelectIcon(event) {
  var replay = function() {
    header.innerHTML = "Choose your fighter!"
    newGameButton.classList.remove("hidden")
    displayGameIcons(game.icons[game.selection])
  }
  if (event.target.getAttribute('class') === "game-icons") {
    game.player.choice = (event.target.getAttribute('id'));
    header.innerHTML = (game.playGame(game.selection))
    displayWinCount();
    displayGameResults();
    // console.log(game);
    setTimeout(replay, 2000);
  }
};

function displayWinCount() {
  playerWinCount.innerHTML = game.player.wins;
  computerWinCount.innerHTML = game.computer.wins;
};

function displayGameResults() {
  gameView.innerHTML = `
    <img src="./assets/` + game.player.choice + `.png" class="game-result">
    <img src="./assets/` + game.computer.choice + `.png" class="game-result">`;
};

function showHomeView() {
  homeView.classList.remove("hidden")
  gameView.classList.add("hidden")
  header.innerHTML = "Choose your game!"
  newGameButton.classList.add("hidden")
};

function resetGame() {
  game = new Game();
  showHomeView();
  displayWinCount();
};
