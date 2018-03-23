process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function isBalanced(s) {
    // Complete this function
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    var curr = s[i];
    
    if (!!pairs[curr]) {
      stack.push(curr);
    } else if (pairs[stack[stack.length - 1]] === curr) {
      stack.pop();
    } else {
      return "NO";
    }
  }
  
  let isEmpty = stack.length === 0;
  return isEmpty ? "YES" : "NO";
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        var result = isBalanced(s);
        process.stdout.write("" + result + "\n");
    }

}

