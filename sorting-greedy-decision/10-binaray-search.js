function solution([num, target, nums]) {
  const sortArr = nums.split(' ').map(item => +item).sort((a, b) => a - b);
  const getMid = (s, e) => parseInt((s + e) / 2);
  let [start, end] = [0, num - 1];
  let mid = getMid(start, end);

  while (target !== sortArr[mid]) {
    if (sortArr[mid] > target) {
      end = mid - 1;
    } else if (sortArr[mid] < target) {
      start = mid + 1;
    }
    mid = getMid(start, end);
  }

  console.log(mid);
  return mid
}

// Execute Test
const exampleStrList = [
  [8, 32, '23 87 65 12 57 32 99 81']
];
exampleStrList.forEach(exampleStr => solution(exampleStr));


