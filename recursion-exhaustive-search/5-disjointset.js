function solution(arr) {
  let answer = 'NO';
  const flagArr = Array(arr.length).fill(false);

  const dfs = (depth) => {
    if (depth === arr.length) {
      let [sum1, sum2] = [0, 0];

      arr.forEach((item, idx) => {
        if (flagArr[idx]) {
          sum1 += item;
        } else {
          sum2 += item;
        }
      })

      if (sum1 === sum2) {
        answer = 'YES';
      }
    } else {
      if (answer === 'YES') {
        return;
      }
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
