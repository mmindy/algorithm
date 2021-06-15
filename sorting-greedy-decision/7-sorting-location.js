function solution([num, ...locations]) {
  locations.sort((curr, next) => {
    if (curr[0] > next[0]
      || (curr[0] === next[0] && curr[1] > next[1])) {
      return 1;
    }
    return -1;
  })
  console.log(locations);
  return locations;
}

// Execute Test
const exampleStrList = [
  [5, [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]]
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
