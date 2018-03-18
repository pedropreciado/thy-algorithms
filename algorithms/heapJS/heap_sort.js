let BinaryMinHeap = require("./heap");

function heapSort(array) {
  let heap = new BinaryMinHeap;

  while (array.length) {
    heap.push(array.pop())
  }

  let result = [];

  while (heap.count() > 0) {
    result.push(heap.extract());
  }

  return result;
}

var arr = [4, 12345, 7, 4, 4, 33, 54, -1, 2342];
console.log(heapSort(arr));
