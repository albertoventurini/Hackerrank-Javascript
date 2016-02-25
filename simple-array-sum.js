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

var add = function(a, b) {
  return a+b;
};

var reduce = function (arr, iteratee, init) {
  if(arr.length === 0) {
    return init;
  }

  var head = arr[0];
  var tail = arr.slice(1);
  return iteratee(head, reduce(tail, iteratee, init));
};


function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = reduce(arr, add, 0);
    console.log(result);
}
