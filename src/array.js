const arr = [1, 2, 3, 4];

export function printArr() {
  console.log('---array methods---');
  console.log(`arr:${arr}`);
}

function printVal(val) {
  console.log(val);
}

export function forEach() {
  console.log('forEach: print each value');
  arr.forEach(printVal);
}

function multiply(val) {
  return (val * 2);
}

export function map() {
  console.log('map: multiply by 2');
  const newArr = arr.map(multiply);
  console.log(`${newArr}`);
}

function evenNums(val) {
  return val % 2 === 0;
}

export function filter() {
  console.log('filter: even numbers only');
  const newArr = arr.filter(evenNums);
  console.log(`${newArr}`);
}

export function find() {
  console.log('find: first even number');
  const found = arr.find(evenNums);
  console.log(`${found}`);
}

export function every() {
  console.log('every: is every number even number?');
  const everyEven = arr.every(evenNums);
  console.log(`${everyEven}`);
}

function divByThree(num) {
  return num % 3 === 0;
}

export function some() {
  console.log('some: is some number divided by three?');
  const someDivByThree = arr.some(divByThree);
  console.log(someDivByThree);
}

function sum(acc, val) {
  return acc + val;
}

function prod(acc, val) {
  return acc * val;
}

export function reduce() {
  console.log('sum of array');
  const sumArr = arr.reduce(sum, 0);
  console.log(sumArr);
  console.log('product of array');
  const prodArr = arr.reduce(prod, 1);
  console.log(prodArr);
}
