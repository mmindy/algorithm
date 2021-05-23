/** [올바른 괄호]
 * 괄호가 입력되면 올바른 괄호이면 'YES', 올바르지 않으면 'NO'를 출력합니다
 * (())() 이것은 괄호의 쌍이올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아닙니다.
 *
 * 조건: 문자열 최대 길이는 30
 * */

// Test Function
function test(str) {
  if (str.length > 30) {
    console.warn('최대 입력 글자수는 30개입니다');
    return;
  }
  const PARENTHESIS = {
    OPEN: '(',
    CLOSE: ')',
  };

  let result = 'YES';
  const arr = [...str];
  const stack = [];

  for (let item of arr) {
    if (item === PARENTHESIS.OPEN) {
      stack.push(item);
    } else if (item === PARENTHESIS.CLOSE) {
      if (stack.length) {
        stack.pop();
      } else {
        result = 'NO';
        break;
      }
    }
  }

  if (stack.length) {
    result = 'NO';
  }

  console.log(`Result is >> ${result} <<`);
  return result;
}

// Execute Test
const exampleStrList = [
  '(()(()))(()',
  '()(()(())',
  '(())()',
  '()(()(())()(()(())()(()(())()(()(())()(()(())',
];
exampleStrList.forEach(exampleStr => test(exampleStr));

