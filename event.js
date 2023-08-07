const EventEmitter = require('events')

const http = require('http')


class Sale extends EventEmitter{
    constructor(){
        super()
    }
}

const eventEmitter = new Sale()


eventEmitter.on('newSale',()=>{
    console.log('this is a new sale')
})



eventEmitter.on('newSale',()=>{
    console.log('Customer name is Jonas')
})

eventEmitter.on('newSale',(arg)=>{
    console.log(arg)
})


eventEmitter.emit('newSale',2000)



//////////////////////////////////////////////



const server = http.createServer()

server.on('request',(req,res)=>{
    console.log(req.url)
    console.log('request received')
    res.end('hahaha')
})

server.on('request',()=>{
    console.log('another received')
})

server.on('close',() =>{
    console.log('server closed')
})


server.listen('8000','127.0.0.1',()=>{
    console.log('Waitting for request!')
})
