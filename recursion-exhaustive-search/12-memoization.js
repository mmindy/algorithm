/**
 * 메모이제이션: 프로그래밍을 할 때 반복되는 결과를 메모리에 저장해서 다음에 같은 결과가 나올 때 빨리 실행하는 코딩 기법
 * */
const solution = (function([n, r]) {
  const memory = {};
  let result = 0;

  const loop = ([n, r]) => {

    if (r === 1) {
      result += n;
      return;
    }
    if (n === r) {
      result += 1;
      return;
    }

    loop([n - 1, r - 1]);
    loop([n - 1, r]);
  };
  loop([n, r]);

  console.log(result);
  return result;
});

// Execute Test
const exampleList = [
  [5, 3],
  [33, 19]
];
exampleList.forEach(example => solution(example));



// const solution = (function([n, r]) {
//   const memory = {};
//   let result = 0;
//
//   const loop = ([n, r]) => {
//     console.log('-----', n, r);
//
//     if (memory[`${n}-${r}`]) {
//       console.log('memory[`${n}-${r}`]', n, r, memory[`${n}-${r}`]);
//       return memory[`${n}-${r}`];
//     }
//     if (r === 1) {
//       console.log('r === 1', n, r, result);
//       memory[`${n}-${r}`] = n;
//       return memory[`${n}-${r}`];
//     }
//     if (n === r) {
//       console.log('r === 1', n, r, result);
//       memory[`${n}-${r}`] = 1;
//       return memory[`${n}-${r}`];
//     }
//
//     memory[`${n}-${r}`] = loop([n - 1, r - 1]) + loop([n - 1, r]);
//     return result;
//   };
//   loop([n, r])
//   console.log(result, memory);
//   // return loop;
// });
