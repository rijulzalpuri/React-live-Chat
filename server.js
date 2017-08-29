var express = require('express')
var app = express()
var connections=[]
app.use(express.static('./public'))
let port = 3002
var server=app.listen(port);
var io = require('socket.io').listen(server)
let title="React Polling App"
var Audience=[]
var ChatArr=[]
io.sockets.on('connection',(socket)=>{
    socket.once('disconnect',()=>{
        connections.splice(connections.indexOf(socket),1)
       var index= Audience.findIndex((item)=>{
            return item.id==socket.id
        })
        Audience.splice(index,1)
        socket.disconnect()
        io.sockets.emit('audience',Audience)        
        console.log('Disconnected Sockets remaining',connections.length,index)
    })
    connections.push(socket)

    console.log('Connected New socket Total==',connections.length)

    socket.emit('TitleOfPresentation',{
        title
    })

    socket.on('Join',function(data){
        var newMember={
            id:this.id,
            name:data.name
        }
        this.emit('join',{
            newMember
        })
        Audience.push(newMember)
        io.sockets.emit('audience',Audience)
        console.log('Audience Joined',data.name)
    })

    socket.on('AddChat',(data)=>{
        console.log('Data recieved')
        ChatArr.push({data})
        io.sockets.emit('Chat',ChatArr)
    })
io.sockets.emit('Chat',ChatArr)    
    
})
console.log('Server Running on port',port)