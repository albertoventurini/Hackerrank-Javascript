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

function factorial(n) {
  if(n <=1)
    return 1;
  return n*factorial(n-1);
}

function splitSubstrings(s, size) {
  let substrings = [];
  for(let i = 0; i <= s.length - size; i++) {
    substrings.push(s.slice(i, i+size))
  }
  return substrings;
}

function sortSubstrings(substrings) {
  return substrings.map(function(s) {
    return s.split('').sort().join('');
  }).sort();
}

function countAnagramsSubstrings(s, size) {
  let sortedSubstrings = sortSubstrings(splitSubstrings(s, size));
  let anagrams = 0;
  let i = 0;
  while(i < sortedSubstrings.length) {
    let s = sortedSubstrings[i];
    let j = i + 1;
    let samePairs = 0;
    while(j < sortedSubstrings.length && sortedSubstrings[j] === sortedSubstrings[i]) {
      //anagrams++;
      samePairs++;
      j++;
    }
    if(samePairs > 1)
      anagrams += ( factorial(samePairs) / 2 * factorial(samePairs-2));
    else {
      anagrams = samePairs;
    }
    i = j;
  }
  return anagrams;
}

function countAnagrams(s) {
  let anagrams = 0;
  for(let i = 1; i < s.length; i++) {
    anagrams += countAnagramsSubstrings(s, i);
  }
  return anagrams;
}

function main() {
  var t = parseInt(readLine());
  for(var i = 0; i < t; i++){
    var s = readLine();
    console.log(countAnagrams(s));
  }

}
