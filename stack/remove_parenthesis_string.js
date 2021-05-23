/** [괄호문자제거]
 * 입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요
 *
 * 조건: 문자열의 최대 길이는 100
 * */

function test(str) {
  if (str.length > 100) {
    console.warn('최대 입력 글자수는 100개입니다');
    return;
  }
  const PARENTHESIS = {
    OPEN: '(',
    CLOSE: ')',
  };

  let result = '';
  const arr = [...str];
  const stack = [];

  arr.forEach(item => {
    if (item === PARENTHESIS.OPEN) {
      stack.push(item);
    } else if (item === PARENTHESIS.CLOSE) {
      if (stack.length) stack.pop();
    } else if (!stack.length) {
      result += item;
    }
  })

  console.log(result);
  return result;
}

// Execute Test
const exampleStrList = [
  '(A(BC)D)EF(G(H)(IJ)K)LM(N)'
];
exampleStrList.forEach(exampleStr => test(exampleStr));
