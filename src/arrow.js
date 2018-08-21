const arr = [1, 2, 3, 4];

export const printArr = () => {
  console.log('---arrow methods---');
  console.log(`arr:${arr}`);
};

const add = (item, acc) => item + acc;
const multiply = (item, acc) => item * acc;

export const reduce = () => {
  const addArr = arr.reduce(add, 0);
  console.log('sum of array');
  console.log(addArr);
  const prodArr = arr.reduce(multiply, 1);
  console.log('product of array');
  console.log(prodArr);
};

export const reduce2 = () => {
  const addArr = arr.reduce((val, acc) => val + acc, 0);
  console.log('sum of array');
  console.log(addArr);
  const prodArr = arr.reduce((val, acc) => val * acc, 1);
  console.log('product of array');
  console.log(prodArr);
};
