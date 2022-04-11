const http = require('http');
const app = http.createServer(() => {})
app.listen(8088);
// const timer = setInterval(function(){
//     console.log('timer')
// },5000)

for (let i of process._getActiveHandles()) {
    i.unref()
    console.log(i)
}
