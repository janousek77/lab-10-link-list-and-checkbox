const expect = require('expect');
let SLL = require('../index.js');

describe('Singly Linked List', () => {
  describe('SLL Constructor', () => {
    it('Should create a node', () => {
      let node = new SLL('cat');
      expect(node.value).toEqual('cat');
      expect(node.next).toEqual(null);
    });
  });
  describe('Append node', () => {
    it('Should add a node', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      node.appendNode(node2);
      expect(node.value).toEqual('cat');
      expect(node.next.value).toEqual('dog');
      expect(node.next.next).toEqual(null);
    });
    it('Shouldn\'t append a number as a node', () => {
      let node = new SLL('cat');
      node.appendNode(10);
      expect(node.value).toEqual('cat');
      expect(node.next).toEqual(null);
    });
    it('Shouldn\'t append anything', () => {
      let node = new SLL('cat');
      node.appendNode();
      expect(node.value).toEqual('cat');
      expect(node.next).toEqual(null);
    });
  });
  describe('Find middle node', () => {
    it('Should find the middle node', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      node.appendNode(node2);
      node.appendNode(node3);
      let middle = node.findMiddle();
      expect(middle.value).toEqual('dog');
      expect(middle.next.value).toEqual('fish');
      expect(middle.next.next).toEqual(null);
    });
    it('Should find the only node', () => {
      let node = new SLL('cat');
      let middle = node.findMiddle();
      expect(middle.value).toEqual('cat');
      expect(middle.next).toEqual(null);
    });
    it('Should find the first node', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      node.appendNode(node2);
      let middle = node.findMiddle();
      expect(middle.value).toEqual('cat');
      expect(middle.next.value).toEqual('dog');
      expect(middle.next.next).toEqual(null);
    });
  });
  describe('Remove Node', () => {
    it('Should remove a node', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      node.appendNode(node2);
      node.appendNode(node3);
      node.remove(node2);
      expect(node.value).toEqual('cat');
      expect(node.next.value).toEqual('fish');
      expect(node.next.next).toEqual(null);
    });
    it('Shouldn\'t remove anything', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      node.appendNode(node2);
      node.appendNode(node3);
      node.remove(7);
      expect(node.value).toEqual('cat');
      expect(node.next.value).toEqual('dog');
      expect(node.next.next.value).toEqual('fish');
      expect(node.next.next.next).toEqual(null);
    });
    it('Shouldn\'t remove anything', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      let node4 = new SLL('squirrel');
      node.appendNode(node2);
      node.appendNode(node3);
      node.remove(node4);
      expect(node.value).toEqual('cat');
      expect(node.next.value).toEqual('dog');
      expect(node.next.next.value).toEqual('fish');
      expect(node.next.next.next).toEqual(null);
    });
  });
  describe('Reverse', () => {
    it('Should reverse a list and return a new one', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      node.appendNode(node2);
      node.appendNode(node3);
      let newList = node.reverse();
      expect(newList.value).toEqual('fish');
      expect(newList.next.value).toEqual('dog');
      expect(newList.next.next.value).toEqual('cat');
      expect(newList.next.next.next).toEqual(null);
    });
    it('Should reverse a list and return a new one', () => {
      let node = new SLL('cat');
      let node2 = new SLL('dog');
      let node3 = new SLL('fish');
      let node4 = new SLL('squirrel');
      let node5 = new SLL('mouse');
      node.appendNode(node2);
      node.appendNode(node3);
      node.appendNode(node4);
      node.appendNode(node5);
      let newList = node.reverse();
      expect(newList.value).toEqual('mouse');
      expect(newList.next.value).toEqual('squirrel');
      expect(newList.next.next.value).toEqual('fish');
      expect(newList.next.next.next.value).toEqual('dog');
      expect(newList.next.next.next.next.value).toEqual('cat');
      expect(newList.next.next.next.next.next).toEqual(null);
    });
    it('Shouldn\'t change anyything', () => {
      let node = new SLL('cat');
      let newList = node.reverse();
      expect(newList.value).toEqual('cat');
      expect(newList.next).toEqual(null);
    });
  });
});
