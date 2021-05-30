/** 버블 정렬 참고 url
 * https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html
 * */

function solution([len, str]) {
  const arr = str.split(' ').map(item => +item);
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len -1 - i; j++) {
      num1 = arr[j];
      num2 = arr[j + 1];
      if (num1 > num2) {
        arr[j] = num2;
        arr[j + 1] = num1;
      }
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
