function solution([n, cnt]) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const result = [];

  const dfs = (depth, nums, arr) => {
    if (depth === cnt) {
      result.push([...arr]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        dfs(depth + 1, nums.slice(i + 1), arr);
        arr.pop();
      }
    }
  };

  dfs(0, arr, []);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [4, 2]
];
exampleList.forEach(example => solution(example));
