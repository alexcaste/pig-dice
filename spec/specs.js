describe('Player', function(){
  it("will create a player with a name with a score of 0", function(){
    var testPlayer = new Player(1,0);
    expect(testPlayer.playerScore).to.equal(0);
    expect(testPlayer.playerId).to.equal(1);
  });
});

describe('Die', function(){
  it("will create a number of dice for a game", function(){
    var testDie = new Dice(2);
    expect(testDie.number).to.equal(2);
  });

  it("will return a random number between 1-6", function(){
    var testDie = new Dice(1);
    expect("123456").to.contain(testDie.roll(1,7));
  });

  // it("will the max number that dice can have (excluded)", function(){
  //   var testDie = new Dice(2);
  //   expect(testDie.diceMax(testDie.number)).to.equal(13);
  // });

  it("will return false if a die rolls 1", function(){
    var testDie = new Dice(1);
    var diceRoll1 = 1;
    var diceRoll2 = 3;
    expect(testDie.rollAgain(diceRoll1)).to.equal(false);
    expect(testDie.rollAgain(diceRoll2)).to.equal(true);
  });
});

describe('Game', function(){
  it("will add a game object with a number of players, a turn and Winning!", function(){
    var testPlayer1 = new Player(1, 0);
    var testGame = new Game(2, 2, false);
    expect(testGame.numberOfPlayers).to.equal(2);
    expect(testGame.numberOfDice).to.equal(2);
    expect(testGame.charlieSheen).to.equal(false);
  });

  it("will return the player for the next turn", function(){
    var testPlayer1 = new Player(1, 0);
    var testPlayer2 = new Player(2,0);
    var testGame = new Game(2, 2, false);
    expect(testGame.nextPlayer(testPlayer2.playerId, testGame.numberOfPlayers )).to.equal(testPlayer1.playerId);
  });

  it("will add a dice roll to the player score and return score", function(){
    var testDie = new Dice(1);
    var testPlayer = new Player(1, 0);
    var testGame = new Game(1, 1, false);
    var currentScore = testDie.roll(1,7);
    testGame.hold(testPlayer, currentScore);
    expect("123456").to.contain(testPlayer.playerScore);
  });

  it("will create player objects for the number of players", function(){
    var testGame = new Game(1, 1, false);
    var testPlayer = new Player(1, 0);
    expect(testGame.createPlayers(testGame.numberOfPlayers)).to.eql([testPlayer]);
  });

  it("will add the roll to the temporary score", function(){
    var testGame = new Game(1, 1, false);
    var testDie = new Dice(1);
    var diceRoll = testDie.roll(1,7);
    var diceRoll2 = 0;
    expect("123456").to.contain(testGame.activeScore(true, diceRoll, 0));
    expect(testGame.activeScore(false, diceRoll2, 32)).to.equal(0);
  });
});
