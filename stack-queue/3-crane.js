function solution({ board, moves }) {
  const stack = [];
  let burst = 0;

  let tempItem;
  moves.forEach(mItem => {
    board.some(bItem => {
      tempItem = bItem[mItem - 1];
      if (tempItem) {
        bItem[mItem - 1] = 0;

        if (tempItem === stack[stack.length - 1]) {
          burst += 2;
          stack.pop();
        } else {
          stack.push(tempItem);
        }
      }
      return tempItem;
    })
  })

  console.log(stack, burst);
  return burst;
}

// Execute Test
const exampleStrList = [
  {
    board: [
      [0,0,0,0,0],
      [0,0,1,0,3],
      [0,2,5,0,1],
      [4,2,4,4,2],
      [3,5,1,3,1]
    ], //board 배열
    moves: [1,5,3,5,1,2,1,4], //moves 배열
  },
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
