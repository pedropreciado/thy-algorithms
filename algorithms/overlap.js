function sort(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let pivot = arr.shift();
  let left = [];
  let right = [];

  arr.forEach((num) => {
    if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  })

  return sort(left).concat([pivot]).concat(sort(right));
}

function overlap(rect1, rect2) {
  let allX = [];
  let allY = [];

  for (let i = 0; i < 2; i++) {
    allX.push(rect1[i][0])
    allX.push(rect2[i][0])
    allY.push(rect1[i][1])
    allY.push(rect2[i][1])
  }

  allX = sort(allX);
  allY = sort(allY);

  let bottomLeft = [allX[2], allY[2]]
  let topRight = [allX[1], allY[1]]

  console.log(bottomLeft);
  console.log(topRight);

  let h = Math.abs(topRight[1] - bottomLeft[1])
  let b = Math.abs(topRight[0] - bottomLeft[0])

  return b * h;
}

console.log(overlap([[30, 234], [423, 7234]], [[123, 1432], [5234, 5432]]));
