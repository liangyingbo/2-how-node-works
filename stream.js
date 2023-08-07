const fs = require('fs')

const server = require('http').createServer()


server.on('request',(req,res) =>{
    // 解决方案一
    // fs.readFile('test-file.txt',(err,data) =>{
    //     res.end(data)
    // })

    // 解决方案二
//    const readable = fs.createReadStream('test-file.txt')
//    readable.on('data',(chunk)=>{
//         res.write(chunk)
//    })
//    readable.on("end",()=>{
//     res.end()
//    })
    // 解决方案三
    const readable = fs.createReadStream('test-file.txt')
    readable.pipe(res)
})

 server.listen(8000,'127.0.0.1',()=>{
    console.log('server run at 8000')
 })