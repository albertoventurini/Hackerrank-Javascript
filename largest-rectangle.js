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

function solve(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    let area = arr[i]*(i + 1);
    if(area > max) max = area;
  }
  return max;
}

function main() {
  let N = parseInt(readLine());
  let buildings = readLine().split(' ').map((x) => parseInt(x)).sort((x, y) => y - x);
  console.log(solve(buildings));
}
