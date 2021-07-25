/**
 * 팩토리얼
 * */
function solution(max) {
  let result = 0;

  const factorial = (num, multipleNum) => {
    if (num === 1) {
      result = multipleNum;
    } else {
      factorial(num - 1, multipleNum * (num - 1));
    }
  };

  factorial(max, max);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [5];
exampleList.forEach(example => solution(example));
