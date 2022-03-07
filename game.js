class Game {
  constructor() {
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    this.icons = {
      classic: ["rock", "paper", "scissors"],
      difficult: ["rock", "paper", "scissors", "lizard", "alien"]
    };
    this.selection;
  };

  winGame(winner){
    this[winner].wins += 1;
    return `${this[winner].token} ${this[winner].name} won this round! ${this[winner].token}`
  };

  determineWinner(){
    if (this.player.choice === this.computer.choice) {
      return "It's a Draw!";
    }
    else if (this.player.choice === "rock" && (this.computer.choice === "scissors" || this.computer.choice === "lizard")) {
      return this.winGame("player");
    }
    else if (this.player.choice === "paper" && (this.computer.choice === "rock" || this.computer.choice === "alien")) {
      return this.winGame("player");
    }
    else if (this.player.choice === "scissors" && (this.computer.choice === "paper" || this.computer.choice === "lizard")) {
      return this.winGame("player");
    }
    else if (this.player.choice === "lizard" && (this.computer.choice === "paper" || this.computer.choice === "alien")){
      return this.winGame("player");
    }
    else if (this.player.choice === "alien" && (this.computer.choice === "scissors" || this.computer.choice === "rock")) {
      return this.winGame("player");
    } else {
      return this.winGame("computer");
    }
  };
};
