let Vertex = require("../vertex");
let Edge = require("../edge");
let Sort = require("../sort")

let v1 = new Vertex("Wash Markov");
let v2 = new Vertex("Feed Markov");
let v3 = new Vertex("Dry Markov");
let v4 = new Vertex("Brush Markov");
let v5 = new Vertex("Cuddle Markov");
let v6 = new Vertex("Walk Markov");
let v7 = new Vertex("Teach Markov");
let v8 = new Vertex("Worship Markov");

let vertices = [v1, v2, v3, v4, v5, v6, v7, v8];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

test("sorts", () => {
  solutions = [
    [v1.value, v2.value, v3.value, v4.value, v5.value, v6.value, v7.value, v8.value],
      [v1.value, v2.value, v3.value, v5.value, v4.value, v6.value, v7.value, v8.value],
      [v1.value, v3.value, v2.value, v4.value, v5.value, v6.value, v7.value, v8.value],
      [v1.value, v3.value, v2.value, v5.value, v4.value, v6.value, v7.value, v8.value]
  ]

  new Edge(v1, v2);
  new Edge(v1, v3);
  new Edge(v2, v4);
  new Edge(v3, v4);
  new Edge(v2, v5);
  new Edge(v4, v6);
  new Edge(v5, v6);
  new Edge(v6, v7);
  new Edge(v7, v8);

  expect(solutions).toContain(Sort.topologicalSort(shuffle(vertices)).map((vertex) => {
    return vertex.value
  }));
})
