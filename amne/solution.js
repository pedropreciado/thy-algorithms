// let numbers = [];

// for (var i = 0; i < 200000; i += 1) {
//   numbers.push(Math.floor(Math.random() * 1000000));
// }
//
// let windowSize = 100000;
//
//
const fs = require("fs");
//
let data = fs.readFileSync("file.txt", "utf8");

let numbers = data.split("\n").join("").split(" ,  ");
let windowSize = 500;

// let fields = data.split("\n");
// let firstLine = fields[0].split(" ");
// let secondLine = fields[1];
//
// let windowSize = Number(firstLine[1]);
// let numbers = secondLine.split(" ");

const subsets = (arr, stretch) => {
  let sets = [];

  while (stretch > 1) {
    for (var i = 0; i < (arr.length - stretch); i += 1) {
      sets.push(arr.slice(i, i + stretch));
    }

    stretch -= 1;
  }

  return sets;
}

const score = (arr) => {
  let score = 0;

  for (let i = 1; i < arr.length; i += 1) {
    var prevNum = Number(arr[i - 1]);
    var thisNum = Number(arr[i]);

    if (thisNum > prevNum) {
      score += 1;
    } else if (thisNum < prevNum) {
      score -= 1;
    }
  }

  if (score < 0) {
    return -1;
  } else if (score === 0) {
    return 0;
  } else {
    return 1;
  }
}

const analyze = (arr, stretch) => {
  for (let i = 0; i <= (arr.length - stretch); i += 1) {
    let thisWindow = arr.slice(i, i + stretch + 1);
    let windowSubsets = subsets(thisWindow, stretch);
    let totalScore = 0;

    windowSubsets.forEach((set) => {
      console.log("set length: ", set.length);
      let setScore;

      setScore = score(set);
      totalScore += setScore;
    })

    console.log(totalScore);
    console.log("thisWindow: ", thisWindow.length);
    console.log("windowSubsets: ", windowSubsets.length);
  }
}

var start = Date.now();
analyze(numbers, windowSize);

console.log(`This shit took ${(Date.now() - start) / 1000} seconds`);
