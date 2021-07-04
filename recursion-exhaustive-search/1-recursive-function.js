function solution(max) {
  /**
   * 재귀함수 호출 위치 고려하기
   * 종료 조건에 유의하여 loop 성능 높이기
   * */
  let result = '';

  const print = (n) => {
    if (n > 0) {
      print(n - 1);
      result += ` ${n}`;
    }
  }
  print(max);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [3];
exampleList.forEach(example => solution(example));
