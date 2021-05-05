const express = require('express');
const socket = require('socket.io')
const app = express()

var server = app.listen(3000,function(){
    console.log("listening on 3000");
})

app.use(express.static('public'))


let io = socket(server)

io.on('connection',(socket)=>{
    console.log("made socket connection",socket.id);

    socket.on('chat',(data)=>{
        io.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data)
    })
})