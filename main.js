
// VARIABLES

var classicOption = document.querySelector(".classic");
var difficultOption = document.querySelector(".difficult");


// EVENT LISTENERS

classicOption.addEventListener("click", showClassicGame);
difficultOption.addEventListener("click", showDifficultGame);


// FUNCTIONS

function showClassicGame() {
  console.log("classic game");
};

function showDifficultGame() {
  console.log("difficult game");
};
