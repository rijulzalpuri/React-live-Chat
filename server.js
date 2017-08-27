var express = require('express')
var app = express()
var connections=[]
app.use(express.static('./public'))
let port = 3002
var server=app.listen(port);
var io = require('socket.io').listen(server)
let title="React Polling App"
io.sockets.on('connection',(socket)=>{
    socket.once('disconnect',()=>{
        connections.splice(connections.indexOf(socket),1)
        socket.disconnect()
        console.log('Disconnected Sockets remaining',connections.length)
    })
    connections.push(socket)
    console.log('Connected New socket Total==',connections.length)

    socket.emit('TitleOfPresentation',{
        title
    })
    
})
console.log('Server Running on port',port)