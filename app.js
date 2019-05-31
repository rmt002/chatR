const express=require('express');
const app=express();
const port=5000;

//app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/',(req,res)=>{
    res.send("The server is running")
})

server=app.listen(port,(res)=>{
    console.log("App is running on port : "+ port)
})

const io=require("socket.io")(server)

io.on('connection',(socket)=>{
    socket.on('clientSend',(data)=>{
        emittor(data)
    })

    emittor=(data)=>{
        socket.emit("serverSend",data)
    }
})
