const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  current = null;

  root() {
    return this.current;
  }

  add(data) {
    this.current = addData(this.current, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data > node.data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInside(this.current, data);
    
    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data > node.data) {
        return searchInside(node.right, data);
      } else {
        return searchInside(node.left, data);
      }
    }
  }

  find(data) {
    return findData(this.current, data);
    
    function findData(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data > node.data) {
        return findData(node.right, data);
      } else {
        return findData(node.left, data);
      }
    }
  }

  remove(data) {
    this.current = removeNode(this.current, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let maxLeft = node.left;

        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        
        node.left = removeNode(node.left, maxLeft.data);

        return node;
      }
    }
  }

  min() {
    return getMin(this.current);

    function getMin(node) {
      if (!node) {
        return null;
      }

      if (!node.left) {
        return node.data;
      } else {
        return getMin(node.left);
      }
    }
  }

  max() {
    return getMax(this.current);

    function getMax (node) {
      if (!node) {
        return null;
      }

      if (!node.right) {
        return node.data;
      } else {
        return getMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};