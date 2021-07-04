function solution(num) {
  let result = '';

  const convertToBinary = (n) => {
    const quotient = parseInt(n / 2);
    const remainder = n % 2;

    if (quotient > 0) {
      convertToBinary(quotient);
    }
    result += `${remainder}`
  };

  convertToBinary(num);

  console.log(result)
  return result;
}

// Execute Test
const exampleList = [11];
exampleList.forEach(example => solution(example));
