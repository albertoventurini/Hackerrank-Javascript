"use strict";

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

///////////////////////////////////////////////////

function get_cell(matrix, x, y) {
  if(x < 0 || y < 0)
    return 0;
  if(y >= matrix.length || x > matrix[y].length)
    return 0;
  return matrix[y][x];
}

function update_region(matrix, x, y) {
  if(matrix[y][x] === 0)
    return;

  let max = 0;

  for(let i = y - 1; i <= y + 1; i++) {
    for(let j = x - 1; j <= x + 1; j++) {
      if(!(i === y && j === x)) {
        let c = get_cell(matrix, j, i);
        if(c > max) max = c;
      }
    }
  }

  matrix[y][x] = max + 1;
}

function solve(matrix) {
  for(let y = 0; y < matrix.length; y++) {
    for(let x = 0; x < matrix[y].length; x++) {
      update_region(matrix, x, y);
    }
  }

  console.log(matrix);

  let max = 0;

  for(let y = 0; y < matrix.length; y++) {
    for(let x = 0; x < matrix[y].length; x++) {
      if(matrix[y][x] > max) {
        max = matrix[y][x];
      }
    }
  }

  return max;
}

function main() {
  let m = parseInt(readLine());
  let n = parseInt(readLine());

  let matrix = [];

  for(let y = 0; y < m; y++) {
    let numbers = readLine().split(' ').map(function(x) { return parseInt(x); });
    let row = [];
    for(let x = 0; x < n; x++) {
      row.push(numbers[x]);
    }
    matrix.push(row);
  }

  console.log(matrix);

  let max = solve(matrix);
  console.log(max);
}
