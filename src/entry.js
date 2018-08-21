import vardecl from './vardecl';
import * as arrFunctions from './array';
import * as arrowFunctions from './arrow';
import * as points from './classes';
import * as point from './objectLiteral';
import * as templateStr from './templateStrings';
import * as defaultArgs from './defaultFuncArgs';

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

point.init();
console.log(point.point.toString());
console.log(point.point.doubleX());

templateStr.init();
console.log(templateStr.templateStr('John', 'Doe'));

defaultArgs.init();
console.log(defaultArgs.defFuncArgs(1));
console.log(defaultArgs.defFuncArgs(1, 2));
