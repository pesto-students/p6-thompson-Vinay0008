function createGraph(vertices, edges) {
  const adjacencyList = Array(vertices)
    .fill(0)
    .map(() => Array());

  edges.forEach((edge) => {
    const parent = edge[0];
    const child = edge[1];

    adjacencyList[parent].push(child);
    adjacencyList[child].push(parent);
  });

  return adjacencyList;
}

function isPathExist(graph, source, destination) {
  let queue = [source];
  const visited = [];
  visited[source] = true;

  while (queue.length) {
    const v = queue.shift();
    for (const vertex of graph[v]) {
      if (vertex == destination) {
        return true;
      }
      if (!visited[vertex]) {
        queue.push(vertex);
        visited[vertex] = true;
      }
    }
  }

  return false;
}

const graph = createGraph(3, [
  [0, 1],
  [1, 2],
  [2, 0],
]);
console.log(isPathExist(graph, 0, 2)); // true
// Explanation: There are two paths from vertex 0 to vertex 2
// - 0 → 1 → 2
// - 0 → 2

const graph1 = createGraph(6, [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
]);
console.log(isPathExist(graph1, 0, 5)); // false
// Explanation: There is no path from vertex 0 to vertex 5.
