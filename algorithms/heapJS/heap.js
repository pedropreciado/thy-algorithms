class BinaryMinHeap {
  constructor(store = []) {
    this.store = store;

    this.heapifyUp = this.heapifyUp.bind(this);
    this.heapifyDown = this.heapifyDown.bind(this);
    this.count = this.count.bind(this);
    this.extract = this.extract.bind(this);
  }

  count() {
    return this.store.length;
  }

  extract() {
    let extraction = this.store.shift();
    this.heapifyDown(this.store, 0, this.count);

    return extraction
  }

  peek() {
    return this.store[0];
  }

  push(val) {
    this.store.push(val);

    return this.heapifyUp(this.store, this.count() - 1, this.count());
  }

  childIndices(len, parentIndex) {
    let left = 2 * parentIndex + 1;
    let right = 2 * parentIndex + 2;

    let isLeftInRange = left < len;
    let isRightInRange = right < len;

    if (isLeftInRange && isRightInRange) {
      return [left, right];
    } else if (isLeftInRange && !isRightInRange) {
      return [left];
    } else if (!isLeftInRange && isRightInRange) {
      return [right];
    } else {
      return [];
    }
  }

  parentIndex(childIndex) {
    let isOdd = childIndex % 2 === 1;

    if (isOdd) {
      return Math.floor(childIndex / 2);
    } else {
      return (Math.floor(childIndex / 2)) - 1;
    }
  }

  heapifyDown(array, parentIdx, len = array.length) {
    let parent = array[parentIdx];
    let children = this.childIndices(array.length, parentIdx);

    if (children.length === 0) {
      return array;
    }

    let maxIndex = Math.min(children);
    let maxChild = array[maxIndex];

    if (parent > maxChild) {
      [array[parentIdx], array[maxIndex]] = [maxChild, parent];
    } else {
      return array;
    }

    this.heapifyDown(array, maxIndex, array.length);
  }

  heapifyUp(array, childIdx, len = array.length) {
    if (childIdx === 0) {
      return array;
    }

    let parentIdx = this.parentIndex(childIdx);
    let parent = array[Math.floor(parentIdx)];
    let child = array[Math.floor(childIdx)];

    if (child < parent) {
      [array[parentIdx], array[childIdx]] = [child, parent];
    } else {
      return array;
    }

    this.heapifyUp(array, parentIdx, array.length);
  }


}

module.exports = BinaryMinHeap;
