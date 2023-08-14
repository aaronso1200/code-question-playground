let a = require('./a.json');
let a2 = require('./a.json')
const name = `./a.json`
let a4 = require(name)

delete require.cache[require.resolve('./a.json')]
let a3 = require('./a.json')

console.log("A=A2?");
console.log( a===a2);

console.log("A=A3?");
console.log(a===a3);

console.log("A2=A3?");
console.log(a2===a3);

console.log(a4===a2)

//Will load the file
let autoRun = require('./runWhenRequire')
let onlyResolve = require.resolve('./runWhenRequire')