/**
 * 순열 구하기
 * */
function solution([cnt, numArr]) {
  let result = [];

  const dfs = (depth, numIdx, arr) => {
    if (depth === cnt) {
      result.push([...arr]);
    } else {
      numArr.forEach((v, idx) => {
        if (idx !== numIdx) {
          dfs(depth + 1, idx, [...arr, v]);
        }
      })
    }
  };

  dfs(0, Number.MIN_SAFE_INTEGER,[]);

  console.log(`${result.join(' / ')} // ${result.length}`);
  return `${result.join(' / ')} // ${result.length}`;
}

// Execute Test
const exampleList = [
  [2, [3, 6, 9]],
];
exampleList.forEach(example => solution(example));
