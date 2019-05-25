const express=require('express')
const app=express();
const port=3000

//template
app.set('view engine','ejs')

//middleware
app.use(express.static('public'))

app.use('/favicon.ico', express.static('images/favicon.ico'));

//routes
app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/ico',(req,res)=>{
  res.sendFile('/views/favicon.ico')  
})

//Port init
server=app.listen(port,(res)=>{
    console.log("App is running on port : "+ port)
})

const io=require("socket.io")(server)

//socket hookup on connect
io.on('connection',(socket)=>{
    socket.username="ANON"
    socket.on('change_username',(obj)=>{
        socket.username=obj.username
    })

    socket.on("new_message", (data)=>{
        io.sockets.emit('new_message',{message:data.message,username:socket.username})
    })
})
