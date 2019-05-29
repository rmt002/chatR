const express=require('express')
const app=express();
const port=5000

//app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/',(req,res)=>{
    res.send("The server is running")
})

server=app.listen(port,(res)=>{
    console.log("App is running on port : "+ port)
})

const io=require("socket.io")(server)

io.on('connection',(socket)=>{
    socket.username="ANON"
    console.log('Requesting Connection..')
    socket.on('change_username',(obj)=>{
        socket.username=obj.username
    })
    var testvalue=2000
    socket.on('testConnection',(data)=>{
        console.log("connection has been estabilished",data)
        socket.emit("res",testvalue)
    })

    socket.on("new_message", (data)=>{
        console.log('new message recieved')
        io.sockets.emit('new_message',{
            message:data.message,
            username:socket.username
        })
    })
})
