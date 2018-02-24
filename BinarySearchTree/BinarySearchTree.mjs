class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };
    if (!this.root) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  // 中序遍历
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };
    inOrderTraverseNode(this.root, callback);
  }

  // 先序遍历
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };
    preOrderTraverseNode(this.root, callback);
  }

  // 后序遍历
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };
    postOrderTraverseNode(this.root, callback);
  }

  // 最小值
  min(node) {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node) : null;
    };
    return minNode(node || this.root);
  }

  // 最大值
  max(node) {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null;
    };
    return maxNode(node || this.root);
  }

  // 搜索一个特定的值
  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return false;
      if (node.key === key) return node;
      return searchNode(key < node.key ? node.left : node.right, key);
    };
    return searchNode(root, key);
  }

  // 移除一个节点（待修改）
  remove(key) {
    const removeNode = (node, key) => {
      if (node === null) return false;
      if (node.key === key) {
        console.log(node);
        if (node.left === null && node.right === null) {
          let _node = node;
          node = null;
          return _node;
        } else {
          console.log('key', key);
        }
      } else if (node.left !== null && node.key > key) {
        if (node.left.key === key) {
          node.left.key = this.min(node.left.right).key;
          removeNode(node.left.right, node.left.key);
          return node.left;
        } else {
          return removeNode(node.left, key);
        }
      } else if (node.right !== null && node.key < key) {
        if (node.right.key === key) {
          node.right.key = this.min(node.right.right).key;
          removeNode(node.right.right, node.right.key);
          return node.right;
        } else {
          return removeNode(node.right, key);
        }
      } else {
        return false;
      }
      return removeNode(key < node.key ? node.left : node.right, key);
    };
    return removeNode(this.root, key);
  }
}

export default BinarySearchTree;
