export function init() {
  console.log('---default function arguments---');
}

export function defFuncArgs(x, y = 0) {
  return `${x} ${y}`;
}
