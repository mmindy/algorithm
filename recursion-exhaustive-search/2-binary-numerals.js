function solution(num) {
  let result = '';

  const convertToBinary = (n) => {
    const quotient = parseInt(n / 2);
    const remainder = n % 2;

    result = `${remainder}${result}`;

    if (quotient) {
      convertToBinary(quotient);
    }
  };

  convertToBinary(num);

  console.log(result)
  return result;
}

// Execute Test
const exampleList = [11];
exampleList.forEach(example => solution(example));
