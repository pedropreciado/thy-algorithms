const Board = require("./board");
const MoveError = require("./move_error");

class Game {
  constructor() {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.swapTurn();
  }

  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }

  propmtMove(reader, cb) {
    const game = this;

    this.board.print();
    console.log(`Current turn: ${this.currentPlayer}`);

    reader.question("enter rowidx: ", (rowidxStr) => {
      const rowIdx = parseInt(rowidxStr);

      reader.question("Enter colIdx: ", (colIdxStr) => {
        const colIdx = parseInt(colIdxStr);

        cb([rowIdx, colIdx]);
      });
    });
  }

  run(reader, gameCompletionCallback) {
    this.propmtMove((reader, move) => {
      try {
        this.playMove(move);
      } catch (err) {
        if (err instanceof MoveError) {
          console.log(err.msg);
        } else {
          throw err;
        }
      }

      if (this.isOver()) {
        this.board.print();

        if (this.winner()) {
          console.log(`${this.winner()} has won!`);
        } else {
          console.log("No one wins");
        }

        gameCompletionCallback();
      } else {
        this.run(reader, gameCompletionCallback);
      }
    });

  }

  winner() {
    return this.board.winner();
  }
}

module.exports = Game;
