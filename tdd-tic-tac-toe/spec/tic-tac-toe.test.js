const TicTacToeGame = require('../tic-tac-toe')

/*USE THIS: https://github.com/murphyl337/TicTacToe/blob/master/js/specs/tttSpec.js*/ 


describe('', () => {
  it('should initialize with a blank gameboard', () => {
    let game = new TicTacToeGame();

    expect(game.gameBoardStatus()).toEqual("The board is empty")
  })


  it("should allow users to add two players", () => {
    let game = new TicTacToeGame();
    
    game.addPlayer("Player 1")
    game.addPlayer("Player 2")

    expect(game.getPlayers()).toEqual(["Player 1", "Player 2"])
  });



  it('should not allow you to add more than 2 players', () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1")
    game.addPlayer("Player 2")

    expect(game.getPlayers()).toEqual(["Player 1", "Player 2"])
    expect(game.addPlayer("Player 3")).toEqual("Maximum number of players exceeded.")
  })



  it('should assign each player a symbol: X or O', () => {
    let game = new TicTacToeGame();

    game.addPlayer("Player 1", "X")
    game.addPlayer("Player 2", "O")
    expect(game.getPlayerSymbols()).toEqual([
      { player: "Player 1", symbol: "X" }, 
      { player: "Player 2", symbol: "O" }
    ])
  })


  it("should have 9 spaces", () => {
    let game = new TicTacToeGame()

    expect(game.spaces.length).toBe(9);
  });


  it("should be blank when initialized", () => {
    let game = new TicTacToeGame()
    for(let space = 0; space<game.spaces.length; space++){
        expect(game.spaces[space].mark).toBe("");
    }
  });



  it("should change the mark on a space when updated", function(){
    let game = new TicTacToeGame()
    game.addPlayer("Player 1", "X")
    game.addPlayer("Player 2", "O") 

    game.updateBoard("Player 1", 0);
    expect(game.spaces[0].mark).toBe("X");

    game.updateBoard("Player 2", 5);
    expect(game.spaces[5].mark).toBe("O")
});



  it("should return all spaces that haven't been taken when getAvailableSpaces is called", function(){
    let game = new TicTacToeGame();
    let availableSpaces = game.getAvailableSpaces();

    expect(availableSpaces.length).toBe(9);
  });



  it('', () => {
    let game = new TicTacToeGame();

    expect().toEqual()
  })



  it('', () => {
    let game = new TicTacToeGame();

    expect().toEqual()
  })



  it('', () => {
    let game = new TicTacToeGame();

    expect().toEqual()
  })

})