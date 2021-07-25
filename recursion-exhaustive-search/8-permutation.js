/**
 * 중복 순열 구하기
* */
function solution([num, cnt]) {
  let result = [];

  const makePermutation = (depth, arr) => {
    if (depth === cnt) {
      result.push([...arr]);
    } else {
      for (let i = 1; i <= num; i++) {
        makePermutation(depth + 1, [...arr, i]);
      }
    }
  };
  makePermutation(0, []);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [3, 2],
];
exampleList.forEach(example => solution(example));
