import openSocket from '../../node_modules/socket.io-client';
//export const url='https://betchat-ovvvixdtsw.now.sh';
export const url = 'http://52.66.149.32:5000/';
const socket = openSocket(url)

export class MessagingSocket {
    listen = () => {
        socket.on('serverSend', (data) => {
        })
    }

    transmit = (send) => {
        socket.emit('clientSend', send, (data) => {
        })
    }
}

export default MessagingSocket;