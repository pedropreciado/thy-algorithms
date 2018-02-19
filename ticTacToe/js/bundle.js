/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(1);
const Game = __webpack_require__(2);

$( () => {
  // Your code here
  const game = new Game;
  const container = $("figure");
  new View(game, container);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}

module.exports = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(3);
const MoveError = __webpack_require__(4);

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const MoveError = (msg) => {
  this.msg = msg;
}

module.exports = MoveError;


/***/ })
/******/ ]);