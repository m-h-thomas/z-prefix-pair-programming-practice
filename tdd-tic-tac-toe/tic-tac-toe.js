class TicTacToeGame {
  constructor() {
    this.players = []
    this.emptySpaces = 9
    this.spaces = ["", "", "", "", "", "", "", "", ""]
  }

  gameBoardStatus() {
    return "The board is empty"
  }

  addPlayer(player){
    if(this.players.length < 2) {
      this.players.push(player)
    } else {
      return "Maximum number of players exceeded."
    }
  }

  getPlayerSymbols() {
    return this.players
  }

  getPlayers() {
    return this.players
  }

  getEmptySpaces() {
    return this.emptySpaces; 
  }

  updateBoard(player, position) {

  }

}

module.exports = TicTacToeGame