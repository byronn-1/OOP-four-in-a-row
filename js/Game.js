class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  get activePlayer() {
    return this.players.find(player => player.active);
  }

  createPlayers() {
    const players =  [new Player('Player 1', 1, '#e15258', true),
                      new Player('Player 2', 2, '#e59a13', )];
    return players;
  }

  // gets game ready for play 
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  handleKeyDown(e){
    if (this.ready) {
      if (e.key === "ArrowLeft"){
        moveLeft();
      } else if (e.key === "ArrowRight") {
        moveRight();
      } else if (e.key === "ArrowDown") {
        //play token
      }
    }
  }
}