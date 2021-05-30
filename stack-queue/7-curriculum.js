function solution([required, curriculum]) {
  const queue = [...required];
  let first = '';

  [...curriculum].some(cItem => {
    first = queue[0];
    if (first === cItem) {
      queue.shift();
    }
    return !queue.length;
  })

  return queue.length ? 'NO' : 'YES';
}

// Execute Test
const exampleStrList = [
  ['CBA', 'CBDAGE'],
  ['CBA', 'CADGEB'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
