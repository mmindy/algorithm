function solution([n, k]) {
  const princes = Array.from({ length: n }, (v, i) => i + 1);
  const convertK = k - 1;
  let temp = [];
  let turn = 0;

  while(princes.length > 1) {
    princes.forEach(() => {
      temp = princes.shift();
      if (turn === convertK) {
        turn = 0;
      } else {
        princes.push(temp);
        turn++;
      }
    })
  }

  console.log(princes[0]);
  return princes[0];
}

// Execute Test
const exampleStrList = [
  [8, 3],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
