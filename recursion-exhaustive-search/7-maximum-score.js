function solution([limit, arr]) {
  const flagArr = Array(arr.length).fill(false);

  let maxScore = 0;
  const dfs = (depth) => {
    if (depth === arr.length) {
      let [scoreSum, timeSum] = [0, 0];
      arr.forEach((item, idx) => {
        if (flagArr[idx]) {
          scoreSum += item[0];
          timeSum += item[1];
        }
      })

      if (timeSum <= limit) {
        maxScore = Math.max(maxScore, scoreSum);
      }
    } else {
      flagArr[depth] = true; // 포함
      dfs(depth + 1);

      flagArr[depth] = false; // 미포함
      dfs(depth + 1);
    }
  }
  dfs(0);

  console.log(maxScore);
  return maxScore;
}

// Execute Test
const exampleList = [
  [20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]],
];
exampleList.forEach(example => solution(example));
