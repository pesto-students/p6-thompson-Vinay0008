function findJudge(n, pairs) {
    const trusted = new Array(n + 1).fill(0);
    for (const [truster, trustee] of pairs) {
      trusted[truster] -= 1;
      trusted[trustee] += 1;
    }
  
    const maxTrustedIndex = trusted.findIndex((t) => t === n - 1);
  
    return maxTrustedIndex === -1 ? -1 : maxTrustedIndex;
  }
  
  console.log(findJudge(2, [[1, 2]])); // 2
  console.log(
    findJudge(3, [
      [1, 3],
      [2, 3],
    ])
  ); // 3
  console.log(
    findJudge(3, [
      [1, 3],
      [2, 3],
      [3, 1],
    ])
  ); // -1