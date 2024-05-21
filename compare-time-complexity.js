const { SinglyLinkedList, DoublyLinkedList } = require('./linked-list');

function timeOperation(operation, list) {
  const start = process.hrtime();
  operation(list);
  const end = process.hrtime(start);
  return end[0] * 1000 + end[1] / 1000000; // converting to milliseconds
}

// Create a singly linked list
const singlyList = new SinglyLinkedList();

// Timing addToHead for singly linked list
let addToHeadTimeSingly = timeOperation((list) => {
  list.addToHead(1); // Replace with any value you want to add
}, singlyList);

console.log(`addToHead for Singly Linked List: ${addToHeadTimeSingly} ms`);

// Timing addToTail for singly linked list
let addToTailTimeSingly = timeOperation((list) => {
  list.addToTail(2); // Replace with any value you want to add
}, singlyList);

console.log(`addToTail for Singly Linked List: ${addToTailTimeSingly} ms`);

// Create a doubly linked list
const doublyList = new DoublyLinkedList();

// Timing addToHead for doubly linked list
let addToHeadTimeDoubly = timeOperation((list) => {
  list.addToHead(1); // Replace with any value you want to add
}, doublyList);

console.log(`addToHead for Doubly Linked List: ${addToHeadTimeDoubly} ms`);

// Timing addToTail for doubly linked list
let addToTailTimeDoubly = timeOperation((list) => {
  list.addToTail(2); // Replace with any value you want to add
}, doublyList);

console.log(`addToTail for Doubly Linked List: ${addToTailTimeDoubly} ms`);
