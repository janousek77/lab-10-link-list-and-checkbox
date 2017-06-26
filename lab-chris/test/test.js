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
  describe('Append Node', () => {
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
});
