const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  current = null;

  getUnderlyingList() {
    return this.current;
  }

  enqueue(value) {
    this.current = addNew(this.current, value);

    function addNew(node, value) {
      if (!node) {
        return new ListNode(value);
      }
      
      if (node.next) {
        node.next = addNew(node.next, value);
      } else {
        node.next = new ListNode(value);
      }

      return node;
    }
    
  }

  dequeue() {
    if (!this.current) {
      return null;
    }

    let head = this.current.value;
    if (this.current.next) {
      this.current = this.current.next;
    } else {
      this.current = null;
    }

    return head;
  }
}

module.exports = {
  Queue
};
