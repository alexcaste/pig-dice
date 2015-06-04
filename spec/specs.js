describe('Player', function(){
  it("will create a player with a name with a score of 0", function(){
    var testPlayer = new Player(1,0, false);
    expect(testPlayer.playerScore).to.equal(0);
    expect(testPlayer.playerId).to.equal(1);
    expect(testPlayer.charlieSheen).to.equal(false);
  });

  it("show the stats of a player", function(){
    var testPlayer = new Player(1,45,false);
    expect(testPlayer.stats()).to.equal("Player 1: Score = 45");
  });

});


describe('Dice', function(){
  it("will create a number of dice for a game", function(){
    var testDice = new Dice(2);
    expect(testDice.number).to.equal(2);
    expect(testDice.allDice).to.eql([]);

  });

  it("will create an array of rolled dice", function(){
    var testDice = new Dice(2);
    testDice.clearDice();
    testDice.rollAll();
    die1 = testDice.allDice[0];
    die2 = testDice.allDice[1];
    expect(testDice.allDice).to.eql([die1, die2]);
  });

  it("will clear all dice from the array of dice", function(){
    var testDice = new Dice(3)
    expect(testDice.clearDice()).to.eql([])
  });

  // it("will return a random number between 1-6", function(){
  //   var testDie = new Dice(1);
  //   expect("123456").to.contain(testDie.roll(1,7));
  // });
  //
  // it("will the max number that dice can have (excluded)", function(){
  //   var testDie = new Dice(2);
  //   expect(testDie.diceMax(testDie.number)).to.equal(13);
  // });

  it("will return false if a die rolls 1", function(){
    var dice = new Dice(1);
    die1 = new Die(1);
    die1.roll = 1
    dice.allDice = [die1];
    expect(dice.rollAgain()).to.equal(false);
  });
});

describe('Game', function(){
  it("will add a game object with a number of players, a turn and Winning!", function(){
    var testPlayer1 = new Player(1, 0,false);
    var testGame = new Game(2, 2, 0);
    expect(testGame.numberOfPlayers).to.equal(2);
    expect(testGame.numberOfDice).to.equal(2);
  });

  it("will return the player for the next turn", function(){
    var testPlayer1 = new Player(1, 0,false);
    var testPlayer2 = new Player(2,0,false);
    var testGame = new Game(2, 2, 0);
    expect(testGame.nextPlayer(testPlayer2.playerId, testGame.numberOfPlayers )).to.equal(testPlayer1.playerId);
  });

  it("will add a dice roll to the player score and return score", function(){
    var testPlayer = new Player(1, 0,false);
    var testGame = new Game(1, 1, 0);
    var currentScore = 12;
    testGame.hold(testPlayer, currentScore);
    expect(testPlayer.playerScore).to.equal(12);
    expect
  });

  it("will create player objects for the number of players", function(){
    var testGame = new Game(1, 1, 0);
    var testPlayer = new Player(1, 0,false);
    expect(testGame.createPlayers(testGame.numberOfPlayers)).to.eql([testPlayer]);
  });

  it("will add the roll to the temporary score", function(){
    var testGame = new Game(1, 1, 0);
    var testDie = new Dice(1);
    var diceRoll = testDie.roll(1,7);
    var diceRoll2 = 0;
    expect("123456").to.contain(testGame.activeScore(true, diceRoll, 0));
    expect(testGame.activeScore(false, diceRoll2, 32)).to.equal(0);
  });
});
