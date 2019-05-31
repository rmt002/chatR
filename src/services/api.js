import openSocket from '../../node_modules/socket.io-client';
export const url='https://betchat-xctsddsvit.now.sh';
const socket=openSocket(url)

export class MessagingSocket{
    listen=()=>{
        socket.on('serverSend',(data)=>{
        })
    }

    transmit=(send)=>{    
        socket.emit('clientSend',send,(data)=>{
        })
    }
}

export default MessagingSocket;