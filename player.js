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
      this.choice = "Scissors";
    }
  }
}
