/** 삽입 정렬 참고 url
 * https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html
 * */

function solution([len, str]) {
  const arr = str.split(' ').map(item => +item);
  let idx = 0;

  for (let i = 1; i < len; i++) {
    idx = i;
    while (!!idx && arr[idx - 1] > arr[idx]) {
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
      idx--;
    }
  }

  console.log(arr);
  return arr;
}

// Execute Test
const exampleStrList = [
  [6, '11 7 5 6 10 9'],
  [10, '23 11 2 12 7 5 6 10 3 9'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
