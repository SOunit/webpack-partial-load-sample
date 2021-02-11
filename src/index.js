// ES2015 syntax for import
// this is modern
import sum from './sum';
// no export
import './image_viewer';

// CommonJS syntax to import
// this is legacy
// const sum = require('./sum');

const total = sum(10, 8);
console.log(total);
