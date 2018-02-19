class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;

    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    let $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
      for (let colIdx = 0; colIdx < 3; colIdx += 1) {
        let $li = $("<li>");

        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li)
      }
    }

    this.board.append($ul);
  }
}

module.exports = View;
