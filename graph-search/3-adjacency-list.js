function solution([n, m, linkArr]) {
  const listObj = {};

  linkArr.forEach(item => {
    if (!listObj[item[0]]) {
      listObj[item[0]] = [item[1]];
    } else {
      listObj[item[0]].push(item[1]);
    }
  })

  const ch = Array(n).fill(0);
  const path = [];
  let cnt = 0;
  const dfs = (vertax) => {
    if (vertax === n) {
      cnt++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (listObj[vertax].includes(i) && ch[i - 1] === 0) {
          ch[i - 1] = 1;
          path.push(i);
          dfs(i);
          ch[i - 1] = 0;
          path.pop();
        }
      }
    }
  };

  path.push(1);
  ch[0] = 1;
  dfs(1);

  console.log(cnt);
  return cnt;
}

// Execute Test
const exampleList = [[
  5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ],
]];
exampleList.forEach(example => solution(example));
