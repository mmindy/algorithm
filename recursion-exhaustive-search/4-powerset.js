function solution(n) { 
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const flagArr = Array(n).fill(false);

  const result = [];
  const dfs = (depth) => {
    if (depth === n) {
      result.push(arr.filter((v, idx) => flagArr[idx]));
    } else {
      flagArr[depth] = true; // 포함
      dfs(depth + 1);

      flagArr[depth] = false; // 미포함
      dfs(depth + 1);
    }
  }
  dfs(0);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [3];
exampleList.forEach(example => solution(example));
