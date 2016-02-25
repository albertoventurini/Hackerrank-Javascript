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


//////////////////////////////////////////////////////

function countSquares(lower, upper) {
  var lowerSquare = Math.ceil(Math.sqrt(lower));
  var upperSquare = Math.floor(Math.sqrt(upper));
  if(lowerSquare > upperSquare)
    return 0;
  else
    return upperSquare - lowerSquare + 1;
}


function main() {
  var t = parseInt(readLine());
  for(var i = 0; i < t; i++){
    var numbers = readLine().split(' ').map(function(x) { return parseInt(x); });
    console.log(countSquares(numbers[0], numbers[1]));
  }

}
