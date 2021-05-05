var socket = io.connect('http://localhost:3000/');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.querySelector('button');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

const cl = ()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
    message.value = "";
};

message.addEventListener('keypress',()=>{
    socket.emit('typing', handle.value )
})

socket.on('chat',(data)=>{
    feedback.innerHTML = ''
    output.innerHTML+=`<p><strong>${data.handle}: </strong>${data.message}</p>`
});

socket.on("typing",(data)=>{
    feedback.innerHTML = `<em>${data} is typing...</em>`
})