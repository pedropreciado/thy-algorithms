let Edge = require("./edge");
let Vertex = require("./vertex");

module.exports = {

  topologicalSort(vertices) {

    let sorted = [];
    let queue = [];
    let nilArray = [];

    let edges = {};


    vertices.forEach((vertex) => {
      if (vertex.inEdges.length === 0) {
        queue.push(vertex);
      }
      edges[`${vertex.value}`] = vertex.inEdges.length;
    })

    while (queue.length !== 0) {
      let u = queue.pop();
      console.log(u);
      sorted.push(u);
      u.outEdges.forEach((edge) => {
        edges[edge.toVertex.value] -= 1;
        if (edges[edge.toVertex.value] === 0) {
          queue.push(edge.toVertex);
        }
      })
    }
    
    return sorted;
  }

}

// export const topologicalSort = (vertices) => {
//   let sorted = [];
//   let queue = [];
//
//   inEdges = {};
//
//   vertices.forEach((vertex) => {
//     if (vertex.inEdges.length === 0) {
//       queue.push(vertex);
//     }
//     inEdges[vertex] = vertex.inEdges.length;
//   })
//
//   while (queue.length !== 0) {
//     let u = queue.pop();
//     sorted.push(u);
//     u.outEdges.forEach((edge) => {
//       inEdges[edge.toVertex] -= 1;
//       if (inEdges[edge.toVertex] === 0) {
//         queue.push(edge.toVertex);
//       }
//     })
//   }
//
//   if (vertices.length != sorted.length) {
//     return [];
//   } else {
//     return sorted;
//   }
// }
