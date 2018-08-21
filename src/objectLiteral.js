export function init() {
  console.log('---object literal---');
}

const color = 'red';
const number = 100;

const point = {
  x: 5,
  y: 100,
  color, // automatically gets the 'color' in the scope
  toString() {
    return `X=${this.x}, Y=${this.y}, color=${this.color}`;
  },
  [`prop_${number}`]: number, // dynamic property
  doubleX() { return this.x * 2; },
  doubleY: () => this.y * 2, // this does not work
};

export { point };
