var allPathsSourceTarget = function (graph) {
    const source = 0;
    const target = graph.length - 1;
    const result = [];
  
    function dfs(node, path) {
      path.push(node);
  
      if (node == target) {
        result.push(path);
        return;
      }
  
      for (const edge of graph[node]) {
        dfs(edge, [...path]);
      }
    }
  
    dfs(source, []);
    return result;
  };
  
  console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); //[[0,1,3], [0,2,3]]
  console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
  // [
  //   [ 0, 4 ],
  //   [ 0, 3, 4 ],
  //   [ 0, 1, 3, 4 ],
  //   [ 0, 1, 2, 3, 4 ],
  //   [ 0, 1, 4 ]
  // ]