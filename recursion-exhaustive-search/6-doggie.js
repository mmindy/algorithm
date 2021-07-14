function solution([w, arr]) {
  const flagArr = Array(arr.length).fill(false);
  let maxW = 0;
  
  const dfs = (depth) => {
    if (depth === arr.length) {
      let sum = 0;
      arr.forEach((item, idx) => {
        if (flagArr[idx]) {
          sum += item;
        }
      })

      if (sum <= w) {
        maxW = Math.max(maxW, sum);
      }
    } else {
      flagArr[depth] = true; // 포함
      dfs(depth + 1);

      flagArr[depth] = false; // 미포함
      dfs(depth + 1);
    }
  }
  dfs(0);

  console.log(maxW);
  return maxW;
}

// Execute Test
const exampleList = [
  [259, [81, 58, 42, 33, 61]],
];
exampleList.forEach(example => solution(example));
