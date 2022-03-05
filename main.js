
// VARIABLES

var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
// var game = new Game();

// EVENT LISTENERS

classicOption.addEventListener("click", showClassicGame);
difficultOption.addEventListener("click", showDifficultGame);


// FUNCTIONS

function hideHomeView() {
  homeView.classList.add("hidden");
  gameView.classList.remove("hidden");
}

function showClassicGame() {
  hideHomeView()
  console.log("classic game");
};

function showDifficultGame() {
  hideHomeView()
  console.log("difficult game");
};
