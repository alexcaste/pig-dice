function Player(playerId, playerScore) {
  this.playerId = playerId;
  this.playerScore = playerScore;
}

function Dice(number) {
  this.number = number;
}

// Dice.prototype.roll = function(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// Dice.prototype.diceMax = function(number) {
//   return (number * 6) + 1;
// }

Dice.prototype.rollAgain = function(diceRoll) {
  if (diceRoll != 1) {
    return true;
  } else {
    return false;
  }
}

Dice.prototype.roll = function(numberOfDice) {
  var die = Math.floor(Math.random() * (6 - 1)) + 1;
}

function Game(numberOfPlayers, numberOfDice, charlieSheen) {
  this.numberOfPlayers = numberOfPlayers;
  this.numberOfDice = numberOfDice;
  this.charlieSheen = charlieSheen;
}

Game.prototype.nextPlayer = function(currentPlayerId, numberOfPlayers) {
  var nextPlayerId  = (currentPlayerId + 1);
  var numberOfPlayers = this.numberOfPlayers;
  if (nextPlayerId >= numberOfPlayers) {
    nextPlayerId = 1;
  } else {}
  return nextPlayerId;
}

Game.prototype.hold = function(currentPlayer, currentScore) {
  var currentPlayerScore = currentPlayer.playerScore;
  var newPlayerScore = currentScore + currentPlayerScore;
  return currentPlayer.playerScore = newPlayerScore;
}

Game.prototype.createPlayers = function(numberOfPlayers) {
  var allPlayers = []
  for(var x = 1; x <= numberOfPlayers; x++) {
    var player = new Player(x,0);
    allPlayers.push(player);
  }
  return allPlayers;
}

Game.prototype.activeScore = function(rollAgain, diceRoll, currentScore) {
  if (rollAgain === false) {
    return 0;
  } else {
  return diceRoll + currentScore;
  }
}
