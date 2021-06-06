function solution([len, wNum]) {
  const [cLen] = len.split(' ');
  const works = wNum.split(' ').map(item => +item);
  const cache = Array(+cLen).fill(0);

  let idx;
  works.forEach((work) => {
    idx = cache.indexOf(work);
    if (idx > 0) {
      cache.unshift(cache.splice(idx, 1)[0]);
    } else {
      cache.pop();
      cache.unshift(work);
    }
  })

  console.log(cache);
  return cache;
}

// Execute Test
const exampleStrList = [
  ['5 9', '1 2 3 2 6 2 3 5 7'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
