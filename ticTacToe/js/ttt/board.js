class Board {
  constructor() {
    this.grid = Board.makeGrid();
    this.marks = ["x", "o"]
  }

  winner() {
    const posSeqs = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];

    for (let i = 0; i < posSeqs.length; i += 1) {
      const winner = this.winnerHelper(posSeqs[i]); // should return mark or null
      if (winner != null) {
        return winner;
      }
    }

  }

  gameOver() {
    if (this.winner() != null) {
      return true;
    }
  }

  winnerHelper(posSeq) {
    for (let markIdx = 0; markIdx < Board.marks.length; markIdx += 1) {
      const targetMark = Board.marks[markIdx];
      let winner = true;

      for (let posIdx = 0; postIdx < 3; postIdx += 1) {
        const pos = posSeq[posIdx];
        const mark = this.grid[pos[0]][pos[1]]; //check grid at pos = [x, y] ; pos[0] => x pos[1] => ymes

        if (mark != targetMark) {
          winner = false;
        }
      }

      if (winner) {
        return targetMark;
      }
    }

    return null;
  }

  isEmpty(pos) {
    return this.grid[pos[0]][pos[1]] === null;
  }

  placeMark(pos, mark) {
    if (!isEmpty(pos)) {
      return "not empty";
    }

    this.grid[pos[0]][pos[1]] = mark;
  }

  makeGrid() {
    let grid = [];

    for (let i = 0; i < 3; i += 1) {
      let row = [];
      for (let j = 0; j < 3; i += 1) {
        row.push([]);
      }

      this.grid.push(row);
    }

    return grid;
  }
}

module.exports = Board;
