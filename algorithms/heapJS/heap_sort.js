let BinaryMinHeap = require("./heap");

function heapSort(array) {
  let heap = new BinaryMinHeap;

  array.forEach((num) => {
    heap.push(num);
  })

  let result = [];
  console.log("1", heap.count());
  while (heap.count() > 0) {
    result.push(heap.extract());
    console.log(result);
  }
  console.log("2", heap.count());

  return result;
}

var arr = [4, 12345, 7, 4, 4, 33, 54, -1, 2342];
console.log(heapSort(arr));
