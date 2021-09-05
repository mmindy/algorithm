function solution([s, e]) {
  const max = 10000;
  const ch = Array.from({ length: max + 1 }, () => 0)
  const visitCnt = Array.from({ length: max + 1 }, () => 0)
  const queue = [];
  let result = 0;

  queue.push(s);
  ch[s] = 1;
  visitCnt[s] = 0;

  while (queue.length) {
    const v = queue.shift();

    for (let nv of [v + 1, v - 1, v + 5]) {
      visitCnt[nv] = visitCnt[v] + 1;

      if (nv === e) {
        queue.length = 0;
        result = visitCnt[nv];
        break;
      }
      if (nv > 0 && nv <= max && ch[nv] === 0) {
        ch[nv] = 1;
        queue.push(nv);
      }
    }
  }

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [5, 14]
];
exampleList.forEach(example => solution(example));
