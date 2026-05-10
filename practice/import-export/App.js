import {add, subtract, divide} from './mathUtils.js';
import multiply from './mathUtils2.js';

const x = add(10,5);
const y = subtract(10,5);
const z = multiply(10,5);
const w = divide(10,5);


console.log(`The sum of 10 and 5 is ${x}`);
console.log(`The difference of 10 and 5 is ${y}`);
console.log(`The product of 10 and 5 is ${z}`);
console.log(`The quotient of 10 and 5 is ${w}`);