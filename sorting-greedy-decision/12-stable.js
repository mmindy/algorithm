function solution([num, locations]) {
  locations.sort((a, b) => a - b);

  let result = '';
  let left = 1;
  let right = locations[locations.length - 1] - locations[0];

  const getNum = (n, arr) => {
    let tempNum = 1;
    let prev = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - prev >= n) {
        tempNum++;
        prev = arr[i];
      }
    }

    return tempNum;
  };

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (getNum(mid, locations) >= num) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [3, [1, 2, 8, 4, 9]],
];
exampleList.forEach(example => solution(example));
