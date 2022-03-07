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

//could I make this more concise?
  playGame(difficulty){
    this.computer.takeTurn(this.icons[difficulty]);
    if (this.player.choice === this.computer.choice) {
      return "It's a Draw!";
    }
    else if (this.player.choice === "rock" && this.computer.choice === "scissors") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "rock" && this.computer.choice === "lizard") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "paper" && this.computer.choice === "rock") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "paper" && this.computer.choice === "alien") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "paper") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "scissors" && this.computer.choice === "lizard") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "paper"){
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "lizard" && this.computer.choice === "alien"){
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "alien" && this.computer.choice === "scissors") {
      this.winGame("player");
      return "Player won this round!";
    }
    else if (this.player.choice === "alien" && this.computer.choice === "rock") {
      this.winGame("player");
      return "Player won this round!";
    } else {
      this.winGame("computer");
      return "Computer won this round!";
    }
  }
};
