function preOrder(max) { // root -> left -> right
  let result = '';

  const print = (n) => {
    if (n <= max) {
      result += n;
      print(n * 2);
      print((n * 2) + 1);
    }
  }
  print(1);

  console.log(`preorder: ${result}`);
  return result;
}

function inOrder(max) { // left -> root -> right
  let result = '';

  const print = (n) => {
    if (n <= max) {
      print(n * 2);
      print((n * 2) + 1);
      result += n;
    }
  }
  print(1);

  console.log(`preorder: ${result}`);
  return result;
}

function postOrder(max) { // left -> right -> root
  let result = '';

  const print = (n) => {
    if (n <= max) {
      print(n * 2);
      print((n * 2) + 1);
      result += n;
    }
  }
  print(1);

  console.log(`preorder: ${result}`);
  return result;
}

// Execute Test
const exampleList = [7];
exampleList.forEach(example => {
  preOrder(example);
  inOrder(example);
  postOrder(example);
});
