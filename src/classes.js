export function init() {
  console.log('---classes---');
}

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[X=${this.x}, Y=${this.y}]`;
  }
}

export class ColorPoint extends Point {
  static default() {
    return new ColorPoint(0, 0, 'black');
  }

  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return `[X=${this.x}, Y=${this.y}, color=${this.color}]`;
  }
}
