function solution(num) {
  let result = '';

  const printNum = (n) => {
    const quotient = parseInt(n / 2);
    const remainder = n % 2;
    result += `${remainder}`;
    if (quotient) {
      printNum(quotient);
    }
  }
  printNum(num);

  console.log(result);
  return result;
}

// Execute Test
const exampleList = [11];
exampleList.forEach(example => solution(example));
