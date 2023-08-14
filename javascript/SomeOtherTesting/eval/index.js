const fs = require('fs')
const path = require('path')

let code = fs.readFileSync(path.join(__dirname,'./code.js')).toString('utf-8')
const customFunction = (a,b) => {console.log(a + b)}
eval(code)