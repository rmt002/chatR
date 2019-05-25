$(function () {
    var socket = io.connect('http://localhost:3000')
    var message = $("#message")
    var username = $("#username")
    var sendMessage = $("#send_message")
    var sendUsername = $("#send_username")
    var chatroom = $("#chatroom")

    socket.on("new_message",(data)=>{
        chatroom.append("<p class='message'>"+data.username+":   "+data.message+"</p>")
    })
    
    sendMessage.click(function(){
        socket.emit('new_message',{message:message.val()})
    })

    sendUsername.click(function () {
        socket.emit('change_username', { username: username.val() })
    })
})
