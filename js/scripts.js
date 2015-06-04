//code to run program

function Player(playerId, playerScore, charlieSheen) {
  this.playerId = playerId;
  this.playerScore = playerScore;
  this.charlieSheen = charlieSheen;
}

Player.prototype.stats = function() {
  return "Player " + this.playerId + ": Score = " + this.playerScore;
}

function Die(id, isOne) {
  this.id = id;
  this.isOne = isOne;
}

Die.prototype.roll = function() {
  this.roll = Math.floor(Math.random() * (7 - 1)) + 1;
}

function Dice() {
  this.allDice = [];
}

Dice.prototype.clearDice = function() {
  return this.allDice=[];
}

Dice.prototype.numberOfOnes = function(){
  this.numberOfOnes = 0
}


function Game(numberOfPlayers, numberOfDice, activeScore) {
  this.numberOfPlayers = numberOfPlayers;
  this.numberOfDice = numberOfDice;
  this.activeScore = activeScore;
}

Game.prototype.hold = function(currentPlayer) {
  var activeScore = this.activeScore;

  var currentPlayerScore = currentPlayer.playerScore;

  var newPlayerScore = activeScore + currentPlayerScore;

  currentPlayer.playerScore = newPlayerScore;
}

Game.prototype.rollDice = function() {
  var activeScore = this.activeScore;
  var numberOfDice = this.numberOfDice;
  var dice = new Dice();
  var rollScore = 0;
  var numberOfOnes
  for (var x=0; x <= numberOfDice; x++) {
    var die = new Die(x,false);
    die.roll();
    var dieRoll = die.roll;
    if (dieRoll === 1) {
      die.isOne = true;
      var pastOnes = dice.numberOfOnes();
      dice.numberOfOnes() = pastOnes + 1;
      this.activeScore = 0;
    } else {
      rollScore = rollScore + dieRoll;
      this.activeScore = activeScore + rollScore;
    }
    dice.allDice.push(die);
  }
  debugger;
  console.log(dice)
  return dice;
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
