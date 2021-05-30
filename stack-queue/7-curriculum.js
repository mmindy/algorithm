function solution([required, curriculum]) {
  let tempStr = '';

  [...curriculum].forEach(cItem => {
    [...required].forEach(rItem => {
      if (cItem === rItem) {
        tempStr += rItem;
      }
    })
  })

  const result = required === tempStr ? 'YES' : 'NO';

  console.log(result);
  return result;
}

// Execute Test
const exampleStrList = [
  ['CBA', 'CBDAGE'],
  ['CBA', 'CADGEB'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
