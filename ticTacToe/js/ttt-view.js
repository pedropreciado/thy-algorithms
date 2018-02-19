class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;

    this.setupBoard();
    this.prettyIntro();
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
        $li.addClass("square");

        $ul.append($li)
      }
    }

    this.board.append($ul);
  }

  prettyIntro() {
    let colors = ["#1A1a1D", "#4E4E50", "#6F2232", "#950740", "#C3073F"];

    setTimeout(() => {

      $(".square").each((idx, el) => {
        let randomColor = '#' + Math.random().toString(16).substr(-6);
        let $el = $(el);

        $el.css("background-color", randomColor);
        $el.css("transition", "1s");
      });

    }, 500)

    setTimeout(() => {
      $(".square").each((idx, el) => {
        let $el = $(el);

        $el.css("background-color", "#4E4E50");
        $el.css("transition", "1s");
      });
    }, 1200)
  }
}

module.exports = View;
