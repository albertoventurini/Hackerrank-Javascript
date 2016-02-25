"use strict";

process.stdin.resume();
process.stdin.setEncoding("ascii");

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


//////////////////////////////////////////////////

function isBalancedPair(p1, p2) {
  return p1 === '{' && p2 === '}' ||
         p1 === '[' && p2 === ']' ||
         p1 === '(' && p2 === ')';
}


function isBalancedRec(s) {
  if(s.length === 0) return true;
  let first = s[0];
  let last = s[s.length - 1];
  return isBalancedPair(first, last) && isBalancedRec(s.slice(1, s.length - 1));
}

let openingParens = ['{', '[', '('];
let closingParens = ['}', ']', ')'];

function isBalanced(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(openingParens.indexOf(s[i]) != -1) {
      stack.push(s[i]);
    } else if(closingParens.indexOf(s[i]) != -1) {
      if(stack.length === 0)
        return false;
      let o = stack.pop();
      let c = s[i];
      if(!isBalancedPair(o, c)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


function main() {
  let t = parseInt(readLine());
  for(let i = 0; i < t; i++){
    let s = readLine();
    console.log(isBalanced(s) ? "YES" : "NO");
  }
}
