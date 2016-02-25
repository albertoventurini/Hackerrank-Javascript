"use strict";

function parent(i) {
  return Math.floor(i/2);
}

function left(i) {
  return i*2;
}

function right(i) {
  return i*2 + 1;
}

function has(f) {
  return function(heap, i) {
    return f(i) > 0 && f(i) < heap.length;
  }
}

let has_left = has(left);
let has_right = has(right);
let has_parent = has(parent);

function exchange(heap, i, j) {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}

function heapify(heap, i) {
  if(has_parent(heap, i) && heap[parent(i)] > heap[i]) {
    exchange(heap, i, parent(i));
    heapify(heap, parent(i));
  } else if(has_left(heap, i)) {
    let min = heap[left(i)] < heap[i] ? left(i) : i;
    if(has_right(heap, i) && heap[right(i)] < heap[min]) {
      min = right(i);
    }
    if(min !== i) {
      exchange(heap, i, min);
      heapify(heap, min);
    }
  }
}

function addToHeap(heap, k) {
  heap.push(k);
  heapify(heap, heap.length - 1);
}

function removeFromHeap(heap, k) {
  let i = heap.indexOf(k);
  if(i === heap.length - 1) {
    heap.pop();
  } else {
    heap[i] = heap.pop();
    heapify(heap, i);
  }
}

function printMin(heap) {
  console.log(heap[1]);
}


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

function main() {
  let q = parseInt(readLine());
  let heap = [0];
  let commands = [];
  for(let i = 0; i < q; i++){
    commands.push(readLine());
  }

  for(let i = 0; i < q; i++) {
    let command = commands[i].split(' ').map(function(x) { return parseInt(x); });
    if(command[0] === 1) {
      addToHeap(heap, command[1]);
    } else if(command[0] === 2) {
      removeFromHeap(heap, command[1]);
    } else if(command[0] === 3) {
      printMin(heap);
    }
    //console.log(heap);
  }

}
//////////////////////////////////////////////////
