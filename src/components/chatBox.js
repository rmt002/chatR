import React, {Component} from '../../node_modules/react'
import {Message} from './message';

export class ChatBox extends Component{
    constructor(props){
        super();
    }
    state={
        totalMessages:1,
        ticker:1,
        messageData:[{
            name:"anon",
            message:"This is a test message"
        }]
    }

    addNewMessage=()=>{
        let newmessage={
            name:"New User",
            message:"Incoming Message"
        }
        let newMessageData=[...this.state.messageData]
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
       // var elements=<div><Message/><Message/><Message/><Message/><Message/><Message/><Message/><Message/></div>
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