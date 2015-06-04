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

describe('Die', function(){
  it("will create die", function(){
    var testDie = new Die(1, false);
    expect(testDie.id).to.equal(1);
  });

  it("will roll a die", function(){
    var testDie = new Die(1, false);
    expect("123456").to.equal(testDie.roll);
  })
});


describe('Game', function(){
  it("will add a game object with a number of players, a turn and Winning!", function(){
    var testPlayer1 = new Player(1, 0,false);
    var testGame = new Game(2, 2, 0);
    expect(testGame.numberOfPlayers).to.equal(2);
    expect(testGame.numberOfDice).to.equal(2);
  });

  it("will add a dice roll to the player score and return score", function(){
    var testPlayer = new Player(1, 0,false);
    var testGame = new Game(1, 1, 12);
    testGame.hold(testPlayer);
    expect(testPlayer.playerScore).to.equal(12);
    expect
  });


  it("will roll all the dice", function(){
    var testGame = new Game(30, 1, 0);
    var testGameDice = testGame.rollDice();
    expect(testGameDice).to.equal([""])
  });
});
