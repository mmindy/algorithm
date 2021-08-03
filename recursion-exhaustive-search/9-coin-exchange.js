/**
 * 동전교환(DFS-Cut Edge Tech)
 * */
function solution([coin, change]) {
  const coinCnt = coin.length;
  let result = Number.MAX_SAFE_INTEGER;
  let temp = 0;

  const dfs = (cnt, rest) => {
    // if (rest < 0) {
    //   return;
    // }
    if (result >= cnt) { // ★ cut edge tech: 불필요한 dfs 막음
      return;
    }

    if (rest === 0) {
      result = Math.min(result, cnt);
    } else {
      for (let i = 0; i <= coinCnt; i++) {
        temp = rest - coin[i];
        if (temp >= 0) {
          dfs(cnt + 1, rest - coin[i]);
        }
      }
    }
  };

  dfs(0, change);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [
  [[1, 2, 5], 15],
  [[1, 2, 5], 18],
];
exampleList.forEach(example => solution(example));

/**
 * 참고
 * 1. 빅 오 표기법
 * 2. dut edge tech
 * */
