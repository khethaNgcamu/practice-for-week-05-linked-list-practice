class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newHeadNode = new DoublyLinkedListNode(val);

    if(!this.head){
      this.head = newHeadNode;
      this.tail = newHeadNode;
    }else{
      newHeadNode.next = this.head;
      this.head.prev = newHeadNode;
      this.head = newHeadNode; 
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here

    const tailNode = new DoublyLinkedListNode(val);

    if(!this.head){
      this.head = tailNode;
      this.tail = tailNode;
    }else {
      tailNode.prev = this.tail;
      this.tail.next = tailNode;
      this.tail = tailNode;
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;