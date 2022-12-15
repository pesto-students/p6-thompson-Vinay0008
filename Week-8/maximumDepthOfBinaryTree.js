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
  
  function calculateDepth(root) {
    if (root === null) {
      return 0;
    }
  
    let leftHeight = calculateDepth(root.left);
    let rightHeight = calculateDepth(root.right);
  
    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
  
  const root1 = createTree([3, 9, 20, null, null, 15, 7]);
  console.log(calculateDepth(root1)); // 3
  
  const root2 = createTree([1, null, 2]);
  console.log(calculateDepth(root2)); // 2