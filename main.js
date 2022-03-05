
// VARIABLES

var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
var header = document.querySelector("h2");

var game = new Game();

// EVENT LISTENERS

classicOption.addEventListener("click", showClassicGame);
difficultOption.addEventListener("click", showDifficultGame);


// FUNCTIONS

function hideHomeView() {
  homeView.classList.add("hidden");
  gameView.classList.remove("hidden");
  header.innerHTML = "Choose your fighter!"
}

function showClassicGame() {
  hideHomeView()
  //display icons
  //
  console.log(game);
};

function showDifficultGame() {
  game.selection = "difficult"
  hideHomeView()
  console.log("difficult game");
};
