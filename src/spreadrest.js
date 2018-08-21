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

function collectParams(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

export function restFuncParams() {
  collectParams('first', 'second', 'third', 'fourth', 'fifth');
}
