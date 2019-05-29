import openSocket from '../../node_modules/socket.io-client';
const socket=openSocket('http://localhost:5000')

export function socketConfig(data){
    var req=1000;
    socket.emit('testConnection',req,(data)=>{
        console.log('client is connected')
    })

    socket.on('res',(data)=>{
        console.log('res',data)
    })
}

export default socketConfig;