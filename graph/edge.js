let Vertex = require("./vertex");

class Edge {

  constructor(fromVertex, toVertex, cost = 1) {
    this.fromVertex = fromVertex;
    this.toVertex = toVertex;
    this.cost = cost;

    toVertex.addInEdge(this);
    fromVertex.addOutEdge(this);
  }

  destroy() {
    this.fromVertex.inEdges.splice(this.fromVertex.inEdges.indexOf(this));
    this.toVertex.inEdges.splice(this.toVertex.inEdges.indexOf(this));
    this.fromVertex = "";
    this.toVertex = "";
  }
}

module.exports = Edge;
