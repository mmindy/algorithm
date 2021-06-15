function solution([num, ...times]) {
  times.sort((curr, next) => {
    return curr[1] - next[1] || curr[0] - next[0];
  })

  const list = [times[0]];
  for (let i = 1; i < num; i++) {
    if (list[list.length - 1][1] <= times[i][0]) {
      list.push(times[i]);
    }
  }

  console.log(list.length);
  return list.length;
}

// Execute Test
const exampleStrList = [
  [5, [1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
