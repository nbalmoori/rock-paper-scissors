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
      this.choice = "Scissors";
    }
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
