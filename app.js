const express = require('express');
const app = express();
const port = 5000;

//app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/', (req, res) => {
    res.send("The socket server is running")
})

server = app.listen(port, (res) => {
    console.log("Socket app is running on port : " + port)
})

const io = require("socket.io")(server)

io.on('connection', (socket) => {
    socket.on('clientSend', (data) => {
        emittor(data)
    })

    emittor = (data) => {
        socket.emit("serverSend", data) //emit to the client that sent the message
        socket.broadcast.emit("serverSend", data) //emit to everyone other than that client
    }
})
