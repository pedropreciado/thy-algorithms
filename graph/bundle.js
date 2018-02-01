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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

let Edge = __webpack_require__(2);
let Vertex = __webpack_require__(0);

const topologicalSort = (vertices) => {
  let sorted = [];
  let queue = [];

  inEdges = {};

  vertices.forEach((vertex) => {
    if (vertex.inEdges.length === 0) {
      queue.push(vertex);
    }
    inEdges[vertex] = vertex.inEdges.length;
  })

  while (queue.length !== 0) {
    let u = queue.pop();
    sorted.push(u);
    u.outEdges.forEach((edge) => {
      inEdges[edge.toVertex] -= 1;
      if (inEdges[edge.toVertex] === 0) {
        queue.push(edge.toVertex);
      }
    })
  }

  if (vertices.length != sorted.length) {
    return [];
  } else {
    return sorted;
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Vertex = __webpack_require__(0);

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


/***/ })
/******/ ]);