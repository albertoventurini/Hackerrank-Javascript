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

let minHeapProperty = (parent, child) => parent <= child;
let maxHeapProperty = (parent, child) => parent >= child;

function heapify(heap, i, comparator) {
  if(has_parent(heap, i) && !comparator(heap[parent(i)], heap[i])) {
    exchange(heap, i, parent(i));
    heapify(heap, parent(i), comparator);
  } else if(has_left(heap, i)) {
    let item = comparator(heap[left(i)], heap[i]) ? left(i) : i;
    if(has_right(heap, i) && comparator(heap[right(i)], heap[item])) {
      item = right(i);
    }
    if(item !== i) {
      exchange(heap, i, item);
      heapify(heap, item, comparator);
    }
  }
}

function addToHeap(heap, k, comparator) {
  heap.push(k);
  heapify(heap, heap.length - 1, comparator);
}

function removeFromHeap(heap, k, comparator) {
  let i = heap.indexOf(k);
  if(i === heap.length - 1) {
    heap.pop();
  } else {
    heap[i] = heap.pop();
    heapify(heap, i, comparator);
  }
}

function getTop(heap) {
  return heap[1];
}

let maxHeap = [0];
let minHeap = [0];

function addNumber(n) {
  if(maxHeap.length === 0) {
    addToHeap(maxHeap, n, maxHeapProperty);
    return;
  }
  if(n <= getTop(maxHeap)) {
    addToHeap(maxHeap, n, maxHeapProperty);
  } else {
    addToHeap(minHeap, n, minHeapProperty);
  }
  if(maxHeap.length < minHeap.length) {
    let top = getTop(minHeap);
    removeFromHeap(minHeap, top, minHeapProperty);
    addToHeap(maxHeap, top, maxHeapProperty);
  } else if(maxHeap.length > minHeap.length + 1) {
    let top = getTop(maxHeap);
    removeFromHeap(maxHeap, top, maxHeapProperty);
    addToHeap(minHeap, top, minHeapProperty);
  }
}

function getMedian() {
  //console.log(maxHeap);
  //console.log(minHeap);
  if(maxHeap.length > minHeap.length) {
    return getTop(maxHeap);
  } else {
    return (getTop(maxHeap) + getTop(minHeap)) / 2;
  }
}

//////////////////////////////////////////////////


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
  let n = parseInt(readLine());
  for(let i = 0; i < n; i++) {
    addNumber(parseInt(readLine()));
    console.log(getMedian().toFixed(1));
  }

}
