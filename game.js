class Player {
  constructor(name, isHuman) {
    this.name = name
    this.isHuman = isHuman
    this.token
    this.wins = 0;
  }
  takeTurn(difficulty) {
    if (!this.isHuman) {
      return difficulty[getRandomIndex(difficulty)];
    }
    else {
      //ultimately return whatever the human clicks on, need to access Dom. for now, scissors
      return "Scissors";
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
    //computer has randomized of the 3 options
    this.computer.takeTurn(this.difficulty);
    //human picks one by clicking it
    this.player.takeTurn();
    // compare the two options
      //if it's a tie
    if (this.player.choice === this.computer.choice) {
      return `this is a tie`
    }
      //if there's a winner
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      winGame(this.player);
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      winGame(this.player);
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
      winGame(this.player);
    }
    else {
      winGame(this.computer);
    }
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
