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

var printDecentNumber = function(arr) {
  console.log(arr.join(''));
}

var assembleDecentNumber = function(fives, threes) {
  var arr = [];
  for(i = 0; i < fives; i++) {
    arr.push(5);
  }
  for(i = 0; i < threes; i++) {
    arr.push(3);
  }
  return arr;
}

var calcDecentNumber = function(n) {
  var fives = n;
  var threes = 0;

  while(threes <= n) {
    if(fives % 3 === 0 && threes % 5 === 0) {
      return assembleDecentNumber(fives, threes);
    }
    threes += 5;
    fives -= 5;
  }
  return [-1];
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        printDecentNumber(calcDecentNumber(n));
    }

}
