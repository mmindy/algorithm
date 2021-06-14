function solution([num, ...locations]) {
  let curr, next;
  for (let i = 0; i < num - 1; i++) {
    curr = locations[i];
    next = locations[i + 1];
    if (curr[0] > next[0]
      || (curr[0] === next[0] && curr[1] > next[1])
    ) {
      [locations[i], locations[i + 1]] = [locations[i + 1], locations[i]];
    }
  }
  console.log(locations);
  return locations;
}

// Execute Test
const exampleStrList = [
  [5, [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
