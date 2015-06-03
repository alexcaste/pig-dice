describe('Player', function(){
  it("will create a player with a name with a score of 0", function(){
    var testPlayer = new Player("John Digweed",0)
    expect(testPlayer.playerName).to.equal("John Digweed")
    expect(testPlayer.playerScore).to.equal(0)
  });
});

describe('Die', function(){
  it("will create a die with a side number", function(){
    var testDie = new Die(2)
    expect(testDie.side).to.equal(2)
  });
});
