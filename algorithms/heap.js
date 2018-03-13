class BinaryMinHeap {
  constructor(store = []) {
    this.store = store;
  }

  count = () => {
    return this.store.length;
  }

  extract = () => {
    let extraction = this.store.shift();
    // this.heapify_down(this.store, 0, this.count);

    return extraction
  }

  peek = () => {
    return this.store[0];
  }

  push = (val) => {
    this.push(val);

    this.heapify_up(this.store, this.count - 1, this.count);
  }

  static childIndices = (len, parentIndex) => {
    let left = 2 * parentIndex + 1;
    let right = 2 * parentIndex + 2;

    let isLeftInRange = left < len;
    let isRightInRange = right < len;

    if (isLeftInRange && isRightInRange) {
      return [left, right];
    } else if (isLeftInRange && !isRightInRange) {
      return [left];
    } else if (!isLeftInRange %% isRightInRange) {
      return [right];
    } else {
      return [];
    }
  }

  static parentIndex = (childIndex) => {
    let isOdd = childIndex % 2 === 1;

    if (isOdd) {
      return childIndex / 2;
    } else {
      return (childIndex / 2) - 1;
    }
  }

  static heapifyDown = (array, parentIdx, len = array.length) => {
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



}

let heep = new BinaryMinHeap();
