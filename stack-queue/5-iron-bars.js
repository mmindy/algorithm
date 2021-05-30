function solution(str) {
  if (str.length > 100000) {
    console.warn('입력 가능한 최대 문자열 길이는 100000입니다.');
    return;
  }
  const PARENTHESIS = {
    OPEN: '(',
    CLOSE: ')',
  };

  let piece = 0;
  const stack = [];
  let prevStr = '';

  [...str].forEach((item, idx) => {
    if (item === PARENTHESIS.OPEN) {
      stack.push(item);
    } else {
      const str1 = stack.pop();

      if (str1 === prevStr) { // 막대기 끝
        piece += 1;
      } else if (str1 !== prevStr && stack.length) { // 레이저일 경우
        piece += stack.length;
      }
    }
    prevStr = item;
  })

  console.log(piece);
  return piece;
}

// Execute Test
const exampleStrList = [
  '()(((()())(())()))(())',
  '(((()(()()))(())()))(()())',
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
