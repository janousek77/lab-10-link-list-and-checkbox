'use strict';


module.exports = class SLL {
  constructor(value){
    this.value = value;
    this.next = null;
  }

  // O(n)
  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  // O(n)
  remove(node) {
    if(!(node instanceof SLL))
      return null;
    let prev = this;
    let curr = prev.next;
    while(prev) {
      if(curr === node) {
        prev.next = curr.next;
        return;
      }
      prev = curr;
      if(curr.next)
        curr = curr.next;
      else
        return;
    }
  }

  // O(n)
  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  // O(n)
  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // O(n)
  reverse() {
    let latest;
    let list;
    let curr = this;
    while(curr) {
      latest = new SLL(curr.value);
      curr = curr.next;
      latest.appendNode(list);
      list = latest;
    }
    return list;
  }

};
