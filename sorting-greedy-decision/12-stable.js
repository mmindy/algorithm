function solution([count, locations]) {
  locations.sort((a, b) => a - b);

  const getCount = (n, arr) => {
    let tempCount = 1;
    let prev = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - prev >= n) {
        tempCount++;
        prev = arr[i];
      }
    }

    return tempCount;
  };

  let result = '';
  let [left, right] = [1, locations[locations.length - 1] - locations[0]];
  let mid = 0;

  while (left <= right) {
    mid = parseInt((left + right) / 2);

    if (getCount(mid, locations) >= count) {
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
