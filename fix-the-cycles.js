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

function main() {
  let w = readLine().split(' ').map(function(x) { return parseInt(x); });
  let c =  [w[0] + w[3] + w[4],
            w[0] + w[1] + w[2] + w[3],
            w[0] + w[1] + w[5]];

  let p = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];

  if(c[0] < 0) p[0] = -c[0];
  if(c[1] < 0) p[1] = -c[1];
  if(c[2] < 0) p[2] = -c[2];

  if(c[0] >= 0 && c[1] >= 0 && c[2] >= 0)
    console.log('0');
  else {

    p = p.sort().reverse();

    p.forEach(function(i) {
      if(c.every(function(j) { return j + i >= 0; })) {
        console.log(i);
        process.exit();
      }
    })

    console.log('-1');
  }
}
