/** [후위식 연산]
 * 후위 연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요
 * 만약 3*(5+2)-9를 후위연산식으로 표현하면 352+*9-로 표현되며 그 결과는 12입니다
 *
 * 조건:
 * - 연산식의 길이는 최대 50을 넘지 않습니다
 * - 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루러집니다
 * */

const PARENTHESIS = {
  OPEN: '(',
  CLOSE: ')',
};
const OPERATOR = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
  DIVIDE: '/',
};

const getPostfixArr = (infixArr) => {
  const postfixArr = [];
  const stack = [];
  const getPrecedence = function(operator) {
    switch (operator) {
      case OPERATOR.MULTIPLY:
      case OPERATOR.DIVIDE:
        return 3;
      case OPERATOR.PLUS:
      case OPERATOR.MINUS:
        return 2;
      case PARENTHESIS.OPEN:
      case PARENTHESIS.CLOSE:
        return 1;
      default:
        return 0;
    }
  }

  infixArr.forEach(item => {
    if (!isNaN(item)) {
      postfixArr.push(item);
    } else {
      if (!stack.length) {
        stack.push(item);
      } else {
        switch (item) {
          case PARENTHESIS.OPEN:
            stack.push(item);
            break;
          case PARENTHESIS.CLOSE:
            let operator;
            while (stack.length) {
              operator = stack.pop();
              if (operator === PARENTHESIS.OPEN) {
                break;
              } else {
                postfixArr.push(operator);
              }
            }
            break;
          case OPERATOR.PLUS:
          case OPERATOR.MINUS:
          case OPERATOR.MULTIPLY:
          case OPERATOR.DIVIDE:
            const topOperator = stack[stack.length - 1];
            if (getPrecedence(item) > getPrecedence(topOperator)) {
              stack.push(item)
            } else {
              postfixArr.push(stack.pop());
              stack.push(item);
            }
            break;
          default:
            break;
        }
      }
    }
  })

  stack.forEach(item => {
    postfixArr.push(item);
  })

  return postfixArr;
};

const calculatePostfix = (postfixArr) => {
  const stack = [];

  postfixArr.forEach(item => {
    if (!isNaN(item)) {
      stack.push(item);
    } else {
      const num2 = Number(stack.pop());
      const num1 = Number(stack.pop());

      switch (item) {
        case OPERATOR.PLUS :
          stack.push(num1 + num2);
          break;
        case OPERATOR.MINUS :
          stack.push(num1 - num2);
          break;
        case OPERATOR.MULTIPLY :
          stack.push(num1 * num2);
          break;
        case OPERATOR.DIVIDE :
          stack.push(num1 / num2);
          break;
        default :
          break;
      }
    }
  })

  return stack[0];
}

function test(str) {
  if (str.length > 50) {
    console.warn('최대 입력 글자수는 50개입니다');
    return;
  }

  const infixArr = [...str];
  const postfixArr = getPostfixArr(infixArr);
  const result = calculatePostfix(postfixArr);

  console.log(`postfix: ${postfixArr.join('')} / result: ${result}`);
  return result;
}

// Execute Test
const exampleStrList = [
  '5+2*3',
  '3*(5+2)-9',
];
exampleStrList.forEach(exampleStr => test(exampleStr));
