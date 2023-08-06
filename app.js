const prompt = require("prompt-sync")();

class HeroShips {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class AlienShips {
  constructor() {
    this.hull = randomNumber(10, 20);
    this.firepower = randomNumber(2, 4);
    this.accuracy = randomFloat(0.6, 0.8);
  }
}

const hero = new HeroShips();
const alien = new AlienShips();

// helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function ifAttackWasSuccessful(accuracy) {
  return Math.random() < accuracy;
}
function Battle(player, enemy) {
  while (player.hull > 0 && enemy.hull > 0) {
    if (ifAttackWasSuccessful(player.accuracy)) {
      enemy.hull -= player.firepower;
      console.log("You attacked Alien Ship. Alien ship hull is:", enemy.hull);
    } else {
      console.log("Your attack missed!");
    }

    if (enemy.hull <= 0) {
      console.log(
        "The last remaining alien ships were destroyed. You Win! Good job Hero."
      );
      break;
    }

    if (ifAttackWasSuccessful(enemy.accuracy)) {
      player.hull -= enemy.firepower;
      console.log("Alien Attacked you! Your Hull is:", player.hull);
    } else {
      console.log(`The alien missed`);
    }

    if (player.hull <= 0) {
      console.log("Your ship was destroyed you lose.");
      break;
    }
  }
}

while (true) {
  const question = prompt(
    "Hero or Alien? (H/A)...please pick Hero (-_-) and press q to Quit "
  );

  // const player1 = new HeroShips();
  // const enemy = new AlienShips();

  if (question.toLowerCase() === "q") break;

  if (question.toLowerCase() === "h") {
    // const player = new HeroShips(); // Player's hull is 20, firepower is 5 and accuracy is .7
    // const enemy = new AlienShips();
    console.log(
      "Earth has been attacked by a horde of aliens! You are the Hero of Earth and has accepted the mission to destroy every last alien ship."
    );
    console.log("Here are the current stats of the Hero and Alien. ");
    console.log(hero);
    console.log(alien);
  } else if (question.toLowerCase() === "a") {
    console.log(
      "Game over. Your supposed to select the Hero !!! (╯°□°)╯︵ ┻━┻"
    );
    break;
  }
  console.log(
    `While traveling through space you the Hero and your crew on the Hero ship has successfully defeated many Alien ships. Now there are only ${alien.hull} Alien ships left. You talk things over with your crew to come up with a plan to finish them off, but your crew is tired from the earlier battles. However they inform you that they will continue to fight the good fight if you decide to do.`
  );
  const question2 = prompt(
    "Are you ready for another battle? Or is it time to Retreat and call it a day? (B/R) "
  );

  if (question2.toLowerCase() === "b") {
    console.log(
      "The battle next between the Hero and the Aliens has started and.. "
    );

    Battle(hero, alien);
    break;
  } else {
    console.log("Your mission was to destroy every last Alien ship. You lose.");
  }
}
