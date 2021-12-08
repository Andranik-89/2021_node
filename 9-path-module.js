const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'test.txt');
console.log(filePath);

const absolute = path.resolve(__dirname, 'content', 'test.txt');
console.log(absolute);