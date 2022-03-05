class Game {
  constructor() {
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    this.classic = ["rock", "paper", "scissors"];
    this.difficult = ["rock", "paper", "scissors", "lizard", "alien"];
  }

  winGame(winner){
    this[winner].wins += 1;
  }

  playClassicGame(){
    this.selection = "classic";
    this.computer.takeTurn(this.classic);
    this.player.takeTurn();
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
    }
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
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
    this.selection = "difficult";
    this.computer.takeTurn(this.difficult);
    this.player.takeTurn();
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
    }
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "rock" && this.computer.choice === "lizard") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "paper" && this.computer.choice === "alien") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "lizard") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "paper"){
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "alien"){
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "alien" && this.computer.choice === "scissors") {
      console.log('winner is player');
      this.winGame("player");
    }
    else if (this.player.choice === "alien" && this.computer.choice === "rock") {
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
