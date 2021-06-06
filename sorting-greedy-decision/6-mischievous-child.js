function solution([len, str]) {
  const children = str.split(' ').map(item => +item);
  const num = new Set();

  const ascArr = [...children].sort((a, b) => a - b);
  ascArr.forEach((item, idx) => {
    if (item !== children[idx]) {
      num.add(idx + 1);
    }
  })

  console.log(num);
  return [...num].join(' ');
}

// Execute Test
const exampleStrList = [
  [9, '120 125 152 130 135 135 143 127 160'],
  [6, '120 130 150 150 130 150'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
