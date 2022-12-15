class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function insertIntoTree(i, arr) {
    let curr = null;
    if (i < arr.length) {
      curr = new TreeNode(arr[i]);
      curr.left = insertIntoTree(2 * i + 1, arr);
      curr.right = insertIntoTree(2 * i + 2, arr);
    }
    return curr;
  }
  
  function createTree(arr) {
    return insertIntoTree(0, arr);
  }
  
  function levelOrder(root) {
    let queue = [root];
  
    const result = [[root.value]];
  
    while (queue.length) {
      const sameLevelNodes = [];
      const node = queue.shift();
  
      if (node.left) {
        queue.push(node.left);
        if (node.left.value) sameLevelNodes.push(node.left.value);
      }
      if (node.right) {
        queue.push(node.right);
        if (node.right.value) sameLevelNodes.push(node.right.value);
      }
      if (sameLevelNodes.length) result.push(sameLevelNodes);
    }
  
    return result;
  }
  
  const root1 = createTree([3, 9, 20, null, null, 15, 7]);
  console.log(levelOrder(root1)); // [[3],[9,20],[15,7]]
  
  const root2 = createTree([1]);
  console.log(levelOrder(root2)); // [[1]]