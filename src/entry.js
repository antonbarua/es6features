import vardecl from './vardecl';
import * as arrFunctions from './array';
import * as arrowFunctions from './arrow';
import * as points from './classes';

console.log('welcome');

vardecl();

arrFunctions.printArr();
arrFunctions.forEach();
arrFunctions.map();
arrFunctions.filter();
arrFunctions.find();
arrFunctions.every();
arrFunctions.some();
arrFunctions.reduce();

arrowFunctions.printArr();
arrowFunctions.reduce();
arrowFunctions.reduce2();

points.init();
console.log(new points.Point(1, 2).toString());
console.log(new points.ColorPoint(5, 6, 'red').toString());
console.log(points.ColorPoint.default().toString());
