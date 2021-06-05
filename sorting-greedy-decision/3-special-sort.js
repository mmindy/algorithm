function solution(str) {
  const arr = str.split(' ').map(item => +item);
  const negativeArr = arr.filter(elem => elem < 0);
  const positiveArr = arr.filter(elem => elem > 0);

  console.log([...negativeArr, ...positiveArr]);
  return [...negativeArr, ...positiveArr];
}

// Execute Test
const exampleStrList = [
  '1 2 3 -3 -2 5 6 -6',
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
