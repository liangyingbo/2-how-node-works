const fs = require('fs')

setTimeout(() => {
    console.log('timer 1 finish')
}, 0);

setImmediate(()=> console.log('setImmediate 1 finish'))

fs.readFile('test-file.txt',()=>{
    console.log('I/O finish')
})
