class Player {
  constructor(name, isHuman) {
    this.name = name
    this.isHuman = isHuman
    this.token
    this.wins = 0;
  }
  takeTurn(difficulty) {
    if (!this.isHuman) {
      this.choice = difficulty[getRandomIndex(difficulty)];
    }
    else {
      //ultimately return whatever the human clicks on, need to access Dom. for now, scissors
      this.choice = "Rock";
    }
  }
}



class Game {
  constructor(difficulty) {
    //2 player instances: human vs computer
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    // a way to keep track of the selected game type
    this.chosenDifficulty = difficulty;
    this.classic = ["Rock", "Paper", "Scissors"]
    this.difficult = ["Rock", "Paper", "Scissors", "Lizard", "Alien"]
  }
  //a way to keep track of the data for the game board
  winGame(winner){
    this[winner].wins += 1;
  }
  //a way to check the Game's board data for win conditions
    //CLASSIC
  playClassicGame(){
    this.computer.takeTurn(this.classic);
    this.player.takeTurn();
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
    }
    else if (this.player.choice === "Rock" && this.computer.choice === "Scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Paper" && this.computer.choice === "Rock") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Scissors" && this.computer.choice === "Paper") {
      console.log('winner is player');
      this.winGame("player");
    } else {
      this.winGame("computer");
      console.log("winner is computer")
    }
    console.log(this.player.choice);
    console.log(this.computer.choice);
  }

  playDifficultGame(){
    //computer has randomized of the 3 options
    this.computer.takeTurn(this.difficult);
    //human picks one by clicking it
    this.player.takeTurn();
    // compare the two options
      //if it's a tie
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
    }
    //   //if there's a winner
    else if (this.player.choice === "Rock" && this.computer.choice === "Scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Rock" && this.computer.choice === "Lizard") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Paper" && this.computer.choice === "Rock") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Paper" && this.computer.choice === "Alien") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Scissors" && this.computer.choice === "Paper") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Scissors" && this.computer.choice === "Lizard") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Lizard" && this.computer.choice === "Paper"){
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Lizard" && this.computer.choice === "Alien"){
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Alien" && this.computer.choice === "Scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "Alien" && this.computer.choice === "Rock") {
      console.log('winner is player');
      this.winGame("player");
    } else {
      this.winGame("computer");
      console.log("winner is computer")
    }
    console.log(this.player.choice);
    console.log(this.computer.choice);
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


var game1 = new Game("classic");


game1.playDifficultGame()
game1.playDifficultGame()
game1.playDifficultGame()
game1.playDifficultGame()
game1.playDifficultGame()



console.log(game1);

// console.log(game1.player.name)
