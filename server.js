console.log("Hello World")
// Global object instead of window object
// console.log(global);
// Has common Core modules that we will explore
// commonJS modules instead of ES6 modules

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))