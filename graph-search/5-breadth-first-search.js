function solution(max) {
  const makelist = (m) => {
    const obj = {};
    const loop = (num) => {
      if (((num * 2) + 1) <= m) {
        obj[num] = [num * 2, num * 2 + 1];
        loop(num + 1)
      }
    }
    loop(1);
    return obj;
  }

  const listObj = makelist(max);
  const result = [];
  const queue = [];

  const bfs = () => {
    queue.push(1);

    while (queue.length) {
      const first = queue.shift();
      if (!result.includes(first)) {
        result.push(first);
        if (listObj[`${first}`]) {
          queue.push(...listObj[`${first}`]);
        }
      }
    }
  };

  bfs();

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [7];
exampleList.forEach(example => solution(example));
