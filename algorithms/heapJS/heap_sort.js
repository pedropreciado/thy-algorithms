let BinaryMinHeap = require("./heap");

function heapSort(array) {
  let heap = new BinaryMinHeap;

  while (array.length) {
    heap.push(array.pop())
  }

  let result = [];

  while (heap.count() > 0) {
    let el = heap.extract()
    
    result.push(el);
  }

  return result;
}

module.exports = heapSort;
