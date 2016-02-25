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

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var first_diagonal = 0;
    var second_diagonal = 0;
    for(i = 0; i < n; i++) {
      first_diagonal += a[i][i];
      second_diagonal += a[i][n - i - 1];
    }

    var result = Math.abs(first_diagonal - second_diagonal);
    console.log(result);

}
