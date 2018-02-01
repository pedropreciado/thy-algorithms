class Vertex {

  constructor(value) {
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
  }

  addInEdge(edge) {
    this.inEdges.push(edge);
  }

  addOutEdge(edge) {
    this.outEdges.push(edge);
  }

}

module.exports = Vertex;
