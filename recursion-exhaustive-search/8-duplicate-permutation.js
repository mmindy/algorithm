/**
 * 중복 순열 구하기
* */
function solution([num, cnt]) {
  let result = [];

  const dfs = (depth, arr) => {
    if (depth === cnt) {
      result.push([...arr]);
    } else {
      for (let i = 1; i <= num; i++) {
        dfs(depth + 1, [...arr, i]);
      }
    }
  };

  dfs(0, []);

  console.log(`${result.join(' / ')} // ${result.length}`);
  return `${result.join(' / ')} // ${result.length}`;
}

// Execute Test
const exampleList = [
  [3, 2],
];
exampleList.forEach(example => solution(example));
