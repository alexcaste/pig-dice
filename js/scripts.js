//code to run program

function Player(playerId, playerScore) {
  this.playerId = playerId;
  this.playerScore = playerScore;
}

Player.prototype.stats = function() {
  return "Player " + this.playerId + ": Score =" + this.playerScore;
}

// function Dice(number) {
//   this.number = number;
//   var allDice = []
//   for(var x=0; x<= number; x++) {
//     var dieId = x;
//     var die = new Die(x);
//     allDice.push(die);
//   }
// }

function Die(id) {
  this.id = id;
}

Die.prototype.roll = function(min, max) {
  this.roll = Math.floor(Math.random() * (max - min)) + min;
}

// Dice.prototype.diceMax = function(number) {
//   return (number * 6) + 1;
// }

Die.prototype.rollAgain = function(diceRoll) {
  if (diceRoll === 1) {
    debugger;
    return false;
  } else {
    return true;
  }
}

// Dice.prototype.diceList = function(allDice){
//   var allDice = Dice.allDice;
//   for (var x=0; x<=number; x++) {
//     return "Die " + die.dieId + ": " +
//
//   }
// }

// Dice.prototype.roll = function(numberOfDice) {
//   var diceResults= []
//   for (var x=0; x <= numberOfDice; x++){
//     var roll = Math.floor(Math.random() * (6 - 1)) + 1;
//     diceResults.push(roll);
//   }
//   return diceResults;
// }

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

Game.prototype.winning = function(player) {
  var playerScore = player.playerScore;
  var charlieSheen = false;

  if (playerScore >= 100) {
    charlieSheen = true;
  } else {}
  return charlieSheen;
}

// for web pages

$(document).ready(function() {
  $(".show-login").show();
  var newGame;
  var allPlayers=[];
  var initialPlayerScore = 0;
  var tempScore = 0;
  var startCharlieSheen = false;

  $("form#start-game").submit(function(event){
    event.preventDefault();

    var inputNumberOfPlayers = parseInt($( "input#number-of-players" ).val());
    var inputNumberOfDice = parseInt($( "input#number-of-dice" ).val());

    var newGame = new Game(inputNumberOfPlayers,inputNumberOfDice, startCharlieSheen);
    var allPlayers = newGame.createPlayers(inputNumberOfPlayers);


    $(".show-login").hide();
    $(".show-game").show();

    $("ul#players-list").text("");
      allPlayers.forEach(function(player){
        $("ul#players-list").append("<li>" + player.stats() + "</li>");
    })

    $("form#roll").submit(function(event){
      event.preventDefault();

      $(".show-roll").show();
      var gameDie = new Die(1);
      gameDie.roll(1,7);
      $("#dice-list").text("Die = " + gameDie.roll);

      var oneCheck = gameDie.rollAgain(gameDie.roll);

      if (oneCheck === false) {
        return "Game Over";
      } else {}

      var holdingScore = newGame.activeScore(oneCheck, gameDie.roll, tempScore)

      $("#active-score").text(holdingScore)

      tempScore = holdingScore;
    });

  });


});
