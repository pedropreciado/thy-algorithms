const View = require("./ttt-view");
const Game = require("./ttt/game");

$( () => {
  // Your code here
  const game = new Game;
  const container = $("figure");
  new View(game, container);
});
