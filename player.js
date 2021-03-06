class Player {
  constructor(name, isHuman) {
    this.name = name;
    this.isHuman = isHuman;
    this.wins = 0;
    if (isHuman) {
      this.token = "🧑";
    } else {
      this.token = "💻";
    }
    this.choice;
  };

  takeTurn(difficulty, choice) {
    if (!this.isHuman) {
      this.choice = difficulty[getRandomIndex(difficulty)];
    } else {
      this.choice = choice;
    }
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
