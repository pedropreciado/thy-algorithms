let Vertex = require("./vertex");

class Edge {

  constructor(fromVertex, toVertex, cost) {
    this.fromVertex = fromVertex;
    this.toVertex = toVertex;
    this.cost = cost;

    fromVertex.addInEdge(this);
    toVertex.addOutEdge(this);
  }

  destroy() {
    this.fromVertex.inEdges.splice(this.fromVertex.inEdges.indexOf(this));
    this.toVertex.inEdges.splice(this.toVertex.inEdges.indexOf(this));
    this.fromVertex = "";
    this.toVertex = "";
  }
}

module.exports = Edge;
