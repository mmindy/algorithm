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

  [...str].forEach((item, idx) => {
    stack.push(item);
    if (item === PARENTHESIS.CLOSE) {
      const str1 = stack.pop();
      const str2 = str[idx - 1];

      stack.pop();
      if (str1 === str2) { // 막대기 끝
        piece += 1;
      } else if (str1 !== str2 && stack.length) { // 레이저일 경우
        piece += stack.length;
      }
    }
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
