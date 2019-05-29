$(function () {
    var socket = io.connect('https://betchat-velunmxwgs.now.sh')
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
