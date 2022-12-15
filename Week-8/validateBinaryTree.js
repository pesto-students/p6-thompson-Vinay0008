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
  
  function validateABinaryTree(root) {
    if (!root) {
      return true;
    }
  
    if (
      (root.left && root.value < root.left.value) ||
      (root.right && root.value > root.right.value)
    ) {
      return false;
    }
  
    return validateABinaryTree(root.left) && validateABinaryTree(root.right);
  }
  
  const root1 = createTree([2, 1, 3]);
  console.log(validateABinaryTree(root1)); // true
  
  const root2 = createTree([5, 1, 4, null, null, 3, 6]);
  console.log(validateABinaryTree(root2)); // false