class Game {
  constructor() {
    this.player = new Player("Human", true);
    this.computer = new Player("Computer", false);
    this.selection
    this.icons = {
      classic: ["rock", "paper", "scissors"],
      difficult: ["rock", "paper", "scissors", "lizard", "alien"],
    };
  }

  winGame(winner){
    this[winner].wins += 1;
    // return(`${this[winner].token} ${this[winner].name} won this round! ${this[winner].token}`)
  }

//Could I make this more concise by returning in the winGame function? it shows up undefined with the above commented out code
  determineWinner(){
    if (this.player.choice === this.computer.choice) {
      return "It's a Draw!";
    }
    else if (this.player.choice === "rock" && (this.computer.choice === "scissors" || this.computer.choice === "lizard")) {
      this.winGame("player");
      return `${this.player.token} Human won this round!`;
    }
    else if (this.player.choice === "paper" && (this.computer.choice === "rock" || this.computer.choice === "alien")) {
      this.winGame("player");
      return `${this.player.token} Human won this round!`;
    }
    else if (this.player.choice === "scissors" && (this.computer.choice === "paper" || this.computer.choice === "lizard")) {
      this.winGame("player");
      return `${this.player.token} Human won this round!`;
    }
    else if (this.player.choice === "lizard" && (this.computer.choice === "paper" || this.computer.choice === "alien")){
      this.winGame("player");
      return `${this.player.token} Human won this round!`;
    }
    else if (this.player.choice === "alien" && (this.computer.choice === "scissors" || this.computer.choice === "rock")) {
      this.winGame("player");
      return `${this.player.token} Human won this round!`;
    } else {
      this.winGame("computer");
      return `Computer won this round! ${this.computer.token}`;
    }
  }
};
