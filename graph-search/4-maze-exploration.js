function solution(maze) {
  const n = maze.length;
  const path = [];
  let cnt = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  const dfs = (x, y) => {
    if (x === n - 1 && y === n - 1) {
      cnt++;
      console.log(path);
    } else {
      let [tempX, tempY] = [0, 0];
      for (let i = 0; i < dx.length; i++) {
        tempX = x + dx[i];
        tempY = y + dy[i];
        if (tempX >= 0 && tempX < n
          && tempY >= 0 && tempY < n
          && maze[tempX][tempY] === 0
        ) {
          maze[tempX][tempY] = 1;
          dfs(tempX, tempY);
          maze[tempX][tempY] = 0;
        }
      }
    }
  };

  maze[0][0] = 1;
  dfs(0, 0);

  console.log(cnt);
  return cnt;
}

// Execute Test
const exampleList = [[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]];
exampleList.forEach(example => solution(example));
