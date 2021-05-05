var socket = io.connect('http://localhost:3000/');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.querySelector('button');
var output = document.getElementById('output');

const cl = ()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
    message.value = "";
};

socket.on('chat',(data)=>{
    output.innerHTML+=`<p><strong>${data.handle}: </strong>${data.message}</p>`
})