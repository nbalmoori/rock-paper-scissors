class Game {
  constructor() {
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    this.icons = {
      classic: ["rock", "paper", "scissors"],
      difficult: ["rock", "paper", "scissors", "lizard", "alien"],
    };
  }

  winGame(winner){
    this[winner].wins += 1;
  }

  playClassicGame(){
    this.computer.takeTurn(this.icons.classic);
    if (this.player.choice === this.computer.choice) {
      console.log("this is a tie")
      return `It's a Draw!`
    }
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      this.winGame("player");
      console.log("winner is player")
      return "Player won this round!";
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      this.winGame("player");
      console.log("winner is player")
      return "Player won this round!";
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
      this.winGame("player");
      console.log("winner is player")
      return "Player won this round!";
    } else {
      this.winGame("computer");
      console.log("winner is computer")
        return "Computer won this round!";
    }
    console.log(this.player.choice);
    console.log(this.computer.choice);
  }

  playDifficultGame(){
    this.computer.takeTurn(this.icons.difficult);
    if (this.player.choice === this.computer.choice) {
      console.log(`this is a tie`)
      return "It's a Draw!";
    }
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "rock" && this.computer.choice === "lizard") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "paper" && this.computer.choice === "alien") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "lizard") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "paper"){
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "alien"){
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "alien" && this.computer.choice === "scissors") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "alien" && this.computer.choice === "rock") {
      console.log('winner is player');
      this.winGame("player");
      return "Player won this round!";
    } else {
      this.winGame("computer");
      console.log("winner is computer")
      return "Computer won this round!";
    }
    console.log(this.player.choice);
    console.log(this.computer.choice);
  }
};
