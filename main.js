// VARIABLES

var game = new Game();
var classicOption = document.querySelector(".classic-option");
var difficultOption = document.querySelector(".difficult-option");
var homeView = document.querySelector(".home-view");
var gameView = document.querySelector(".game-view");
var title = document.querySelector("h1");
var header = document.querySelector("h2");
var playerWinCount = document.querySelector(".player-win-count");
var computerWinCount = document.querySelector(".computer-win-count");
var newGameButton = document.querySelector("button");

// EVENT LISTENERS

//Could I refactor the first two into one event listener?

// homeView.addEventListener("click", function(event) {
//   showGame(event);
// })

classicOption.addEventListener('click', showClassicGame);
difficultOption.addEventListener('click', showDifficultGame);
newGameButton.addEventListener('click', showHomeView);
title.addEventListener('click', resetGame);
gameView.addEventListener('click', function(event) {
  spinIcon(event)
  playerSelectIcon(event)
  replayGame(event)
});

// FUNCTIONS

//Could I refactor showClassicGame and showDifficultGame into one function?
//Below doesn't work if you click in the middle of the box

// function showGame() {
//   if (event.target.getAttribute('class') === "classic-option") {
//     game.selection = "classic";
//     hideHomeView();
//     displayGameIcons(game.icons.classic);
//   }
//   if (event.target.getAttribute('class') === "difficult-option") {
//     game.selection = "difficult";
//     hideHomeView();
//     displayGameIcons(game.icons.difficult);
//   }
// }

function showClassicGame() {
  game.selection = 'classic';
  hideHomeView();
  displayGameIcons(game.icons.classic);
};

function showDifficultGame() {
  game.selection = 'difficult';
  hideHomeView();
  displayGameIcons(game.icons.difficult);
};

function hideHomeView() {
  homeView.classList.add("hidden");
  gameView.classList.remove("hidden");
  header.innerHTML = 'Choose your fighter!';
};

function showHomeView() {
  homeView.classList.remove("hidden");
  gameView.classList.add("hidden");
  header.innerHTML = 'Choose your game!';
  newGameButton.classList.add("hidden");
};

function displayGameIcons(array) {
  gameView.innerHTML = '';
  for (var i = 0; i < array.length; i++) {
    gameView.innerHTML += `<img src="./assets/` + array[i] + `.png " alt="` + array[i] + `" class="game-icons"` + `id ="` + array[i] + `">`;
  };
};

function spinIcon(event) {
  if (event.target.getAttribute('class') === "game-icons") {
    event.target.classList.add("spin")
  }
};

function playerSelectIcon(event) {
  var selectIcon = function() {
    game.player.takeTurn(game.icons[game.selection], event.target.getAttribute('id'));
    game.computer.takeTurn(game.icons[game.selection]);
    header.innerHTML = (game.determineWinner());
    displayWinCount();
    displayGameResults();
  };

  if (event.target.getAttribute('class') === "game-icons spin") {
    setTimeout(selectIcon, 1000)
  }
};

function replayGame(event) {
  var replay = function() {
    header.innerHTML = 'Choose your fighter!';
    newGameButton.classList.remove("hidden");
    displayGameIcons(game.icons[game.selection]);
  };

  setTimeout(replay, 3000);
};

function displayWinCount() {
  playerWinCount.innerHTML = game.player.wins;
  computerWinCount.innerHTML = game.computer.wins;
};

function displayGameResults() {
  gameView.innerHTML = `
    <img src="./assets/` + game.player.choice + `.png">
    <img src="./assets/` + game.computer.choice + `.png">`;
};

function resetGame() {
  game = new Game();
  showHomeView();
  displayWinCount();
};
