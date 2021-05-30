function solution([n, k]) {
  const princes = Array.from({ length: n }, (v, i) => i + 1);
  const convertK = k - 1;
  let temp = 0;
  let turn = 0;

  while(princes.length > 1) {
    temp = princes.shift();
    if (turn !== convertK) {
      princes.push(temp);
      turn++;
    } else {
      turn = 0;
    }
  }

  console.log(princes[0]);
  return princes[0];
}

// Execute Test
const exampleStrList = [
  [8, 3],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
