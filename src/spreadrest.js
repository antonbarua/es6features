export function init() {
  console.log('---spread and rest operators---');
}

const colors = ['red', 'blue', 'green'];
const bw = ['black', 'white'];

export function shallowCopy() {
  const colors2 = [...colors];
  console.log(colors);
  console.log(colors2);
  console.log(`are colors and colors2 equal? ${colors === colors2}`);
}

export function arrConcat() {
  console.log(colors);
  console.log(bw);
  const wrong = [colors, bw];
  console.log(wrong);
  const all = [...colors, ...bw];
  console.log(all);
}


function printNums(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

export function simpleArrSpread() {
  const spread = [1, 2, 3];
  printNums(...spread);
}

function collectParams(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

export function restFuncParams() {
  collectParams('first', 'second', 'third', 'fourth', 'fifth');
}

export function simpleObjSpread() {
  const obj1 = { foo: 1, x: 'x', y: 'y' };
  const obj2 = { foo: 2, z: 'z' };
  console.log(obj1);
  console.log(obj2);

  const obj3 = { ...obj1, ...obj2 };
  // /printNums(...obj1);//will not work, only iterables in function calls
  console.log(obj3);

  const obj4 = { ...obj1 };
  console.log(obj4);

  const obj5 = { ...obj4, x: 'notx' };
  console.log(obj5);
}
