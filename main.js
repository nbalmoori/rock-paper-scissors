
// VARIABLES

var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
var header = document.querySelector("h2");

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
  displayGameIcons(game.classic)
  console.log(game);
};

function showDifficultGame() {
  game.selection = "difficult"
  hideHomeView()
  displayGameIcons(game.difficult)
  console.log(game);
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
  console.log(event.target.getAttribute('id'));
}
