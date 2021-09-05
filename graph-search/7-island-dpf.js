function solution(matrix) {
  const n = matrix.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1]; // 좌-좌상-상-우상-우-우하-하-좌하
  const dy = [0, -1, -1, -1, 0, 1, 1, 1];
  let result = 0;

  function dfs(x, y){
    matrix[x][y] = 0;

    for(let i = 0; i < dx.length; i++){ // 모든 방향 탐색
      const nx = x + dx[i];
      const ny = y + dy[i];
      if(
        nx >= 0 && nx < n
        && ny >= 0 && ny < n
        && matrix[nx][ny] === 1
      ){
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++){ // matrix 탐색
    for (let j = 0; j < n; j++){
      if(matrix[i][j] === 1){
        result++;
        dfs(i, j);
      }
    }
  }

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ]
];
exampleList.forEach(example => solution(example));

