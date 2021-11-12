import React, {Component} from '../../node_modules/react'
import {Message} from './message';
import openSocket from '../../node_modules/socket.io-client';
import {url} from '../services/api';

export class ChatBox extends Component{
    constructor(props){
        super();
    }
    state={
        totalMessages:1,
        ticker:1,
        messageData:[{
            name:"Roshan T",
            message:"Welcome To The Chatroom"
        }]
    }

    componentDidMount(){
        const socket=openSocket(url)
        socket.on('serverSend',(data)=>{
            this.addNewMessage(data)
        })
    }

    addNewMessage=(data)=>{
        let newmessage={
            name:data['name'],
            message:data['message']
        }
        let newMessageData=this.state.messageData;
        newMessageData.push(newmessage)
        this.setState({
            totalMessages:(this.state.totalMessages)+1,
            messageData:newMessageData
        })
    }

    render(){
        var elements = [];
        for (var i = 0; i < this.state.totalMessages; i++) {
            elements.push(<Message  value={this.state.messageData[i]} key={i}/>);
        }
        return(
            <div className="chatbox row justify-content-center">
                <div>
                {elements}
                </div>
            </div>
        );
    }
}

export default ChatBox;