(function () {
if(typeof Algorithms === "undefined") {
  window.Algorithms = {};
}

// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.
Algorithms.digitalRoot = function (number) {
  if (number < 10) {
    return number;
  }
  let digit = number % 10
  let result = digit +  Algorithms.digitalRoot(Math.floor(number / 10))

  if (result > 10) {
    result = Algorithms.digitalRoot(result)
  }
  return result
};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let strArr = string.split("")
  let result = []

  strArr.forEach((char => {
    if (char === " ") {
      result.push(" ")
    } else {
      newIndex = (alphabet.indexOf(char) + shift) % 26
      result.push(alphabet[newIndex])
    }
  }))

  return result.join("")
};

// Write a function that takes two strings and returns the lenght of the longest common substring.


Algorithms.commonSubstrings = function (stringOne, stringTwo) {
  const makeMatrix = (stringOne, stringTwo) => {
    let matrix = new Array(stringOne.length + 1).fill(Array(stringTwo.length + 1).fill(0));

    let idx1 = 0
    stringOne.split("").forEach((char1) => {
      let idx2 = 0

      stringTwo.split("").forEach((char2) => {
        if (char1 === char2) {
          matrix[idx1 + 1][idx2 + 2] = matrix[idx1][idx2] + 1;
        }

        idx2 += 1;
      })

      idx1 += 1
    })

    return matrix;
  }

  let lengthMatrix = makeMatrix(stringOne, stringTwo);
  console.log(lengthMatrix);
  let result = "";

  let idxA = 0;
  lengthMatrix.forEach((row) => {
    let idxB = 0;

    row.forEach((length) => {
      if (length > result.length) {
        console.log("result1", result);
      result = stringTwo.slice(idxB - length, idxB);
        console.log("rsult2", result);
      }
      idxB += 1;
    })

    idxA += 1;
  })

  return result.length;
};

// Write a function that takes an array of integers and returns their sum.
// Use recursion.
Algorithms.sumRec = function (numbers) {
  if (numbers.length <= 1) {
    return numbers[0]
  }
  let last = numbers.pop()
  return last + Algorithms.sumRec(numbers)
};

// Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {
  if (number <= 1) {
    return [0]
  }
  if (number === 2) {
    return [0, 1]
  }
  let feebs = Algorithms.fibs(number - 1)
  let next = feebs[feebs.length - 1] + feebs[feebs.length - 2]
  return feebs.concat([next])

};

// Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  let i = 0;
  let j = string.length - 1;
  while (i !== j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let i = 0;
  let result = []
  while (i < string.length) {
    let newIndex = 26 - alphabet.indexOf(string[i]) - 1
    result.push(alphabet[newIndex])
    i += 1;
  }
  return result.join("");
};

// Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {
  let substrings = {};
  let i = 0;
  let j = 1;

  let subs = {}

  while (i < string.length) {
    while (j <= string.length) {
      if (!!subs[string.slice(i, j)]) {
        subs[string.slice(i, j)] += 1;
      } else {
        subs[string.slice(i, j)] = 0;
      }
      j += 1;
    }
    i += 1;
    j = i + 1;
  }

  return Object.keys(subs);

};



// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {
  // let i = 1;
  // let j = 2;
  // let sum = array[0];
  //
  // while (i < array.length - 1) {
  //   if (sum + array[i] >= sum) {
  //
  //     sum += array[i];
  //   }
  //
  //   i += 1;
  // }

  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    currentMax = Math.max(0, currentMax + array[i]);
    max = Math.max(currentMax, max);
  }
  return max;


};

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest
// subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {
  let result = [];
  let i = 0;

  while (result.length < 10) {
    number += 1;

    let sideSum = Math.floor(number / 100 % 100) + Math.floor(number % 100);
    let mid = Math.floor(number / 10 % 100);

    if (sideSum === mid) {
      result.push(number);
    };

    i += 1;
  }

  return result;
};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {

  let seen = {};
  let i = 0;
  let noticed = {};
  let result = [];
  while (i < array.length) {
    seen[array[i]] = -1;


    if (seen[k - array[i]]) {
      let max = Math.max(array[i], k - array[i])
      let min = Math.min(array[i], k - array[i])
    }
    i += 1;
  }

  return result;
};


// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {

};

})();
