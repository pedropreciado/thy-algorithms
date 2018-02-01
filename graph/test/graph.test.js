let Vertex = require("../vertex");
let Edge = require("../edge");

let vertex = new Vertex(7);

test("Stores a value", () => {
  expect(vertex.value).toBe(7);
});

test("initially sets inEdges as an empty array", () => {
  expect(vertex.inEdges.length).toBe(0);
});

test("initially sets outEdges as an empty array", () => {
  expect(vertex.outEdges.length).toBe(0);
});

let fromVertex = new Vertex();
let toVertex = new Vertex();
let edge = new Edge(fromVertex, toVertex);

test("stores a fromVertex", () => {
  expect(edge.fromVertex).toEqual(fromVertex);
});

test("stores a toVertex", () => {
  expect(edge.toVertex).toEqual(toVertex);
});

test("stores a cost which defaults to 1", () => {
  expect(edge.cost).toBe(1);
});

test("adds itself to the toVertex's edges", () => {
  expect(toVertex.inEdges).toContain(edge);
});

test("adds itself to the fromVertex's edges", () => {
  expect(fromVertex.outEdges).toContain(edge);
});


test("deletes itself from its toVertex and fromVertex's edges", () => {
  edge.destroy();
  expect(toVertex.inEdges).not.toContain(edge);
});

test("sets its vertices to nil", () => {
  expect(edge.fromVertex).toBe("");
  expect(edge.toVertex).toBe("");
});
