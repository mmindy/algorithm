function solution([num, ...times]) {
  times.sort((curr, next) => {
    return curr[1] - next[1] || curr[0] - next[0];
  })

  let [maxCount, currCount] = [1, 1];
  let target, compare;
  for (let i = 0; i < num; i++) {
    target = times[i];
    for (let j = i + 1; j < num; j++) {
      compare = times[j];
      if (target[0] <= compare[0] && target[1] > compare[0]) {
        currCount++;
      }
    }

    if (maxCount < currCount) {
      maxCount = currCount;
    }
    currCount = 1;
  }

  console.log(maxCount);
  return maxCount;
}

// Execute Test
const exampleStrList = [
  [5, [14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]
];
exampleStrList.forEach(exampleStr => solution(exampleStr));


