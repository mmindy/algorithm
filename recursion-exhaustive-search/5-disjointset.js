function solution(arr) {
  let answer = 'NO';
  const flagArr = Array(arr.length).fill(false);
  const total = arr.reduce((acc, cur) => acc += cur);

  const dfs = (depth) => {
    if (answer === 'YES') {
      return;
    }
    if (depth === arr.length) {
      const tempArr = arr.filter((v, idx) => flagArr[idx]);
      const sum = tempArr.length ? tempArr.reduce((acc, cur) => acc += cur) : 0;

      if (sum === total / 2) {
        answer = 'YES';
      }
    } else {
      flagArr[depth] = true; // 포함
      dfs(depth + 1);

      flagArr[depth] = false; // 미포함
      dfs(depth + 1);
    }
  }
  dfs(0);

  console.log(answer);
  return answer;
}

// Execute Test
const exampleList = [
  [1, 3, 5, 6, 7, 10],
  [1, 3, 5, 6, 7, 12],
  [1, 3, 5, 6, 7, 14],
  [1, 3, 5, 6, 7, 16],
  [1, 3, 5, 6, 7, 18],
];
exampleList.forEach(example => solution(example));
