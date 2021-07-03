function solution(max) {
  let result = '';
  let num = 0;

  const print = () => {
    num++;
    result += ` ${num}`;
    if (num < max) {
      print();
    }
  }

  print();
  console.log(result);
  return result;
}

// Execute Test
const exampleList = [3];
exampleList.forEach(example => solution(example));
