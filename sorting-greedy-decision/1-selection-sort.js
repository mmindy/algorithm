/** 선택 정렬 참고 url
 * https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html
* */

function solution([len, str]) {
  const arr = str.split(' ').map(item => +item);
  let minIdx = 0;

  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  console.log(arr);
  return arr;
}

// Execute Test
const exampleStrList = [
  [6, '13 5 11 7 23 15'],
  [8, '13 5 11 7 23 15 2 27'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
