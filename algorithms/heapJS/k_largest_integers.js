let heapSort = require("./heap_sort");


function kLargest(array, k) {
  array = heapSort(array);
}



//
// let arr = [];
//
// for (var i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 1000));
// }

let arr = [123, 432, 435, 6445];
kLargest(arr);
