function solution(num) {
  let temp  = 0;

  const printNum = (n) => {
    temp += 1;
    console.log(temp);
    if (temp < n) {
      printNum(n);
    }
  }

  printNum(num);
}

// Execute Test
const exampleList = [3, 5];
exampleList.forEach(example => solution(example));
