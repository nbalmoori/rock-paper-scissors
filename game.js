class Game {
  constructor() {
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    this.classic = ["Rock", "Paper", "Scissors"];
    this.difficult = ["Rock", "Paper", "Scissors", "Lizard", "Alien"];
  }

  winGame(winner){
    this[winner].wins += 1;
  }

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
    this.computer.takeTurn(this.difficult);
    this.player.takeTurn();
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
    }
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
