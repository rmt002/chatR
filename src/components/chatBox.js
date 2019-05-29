import React, {Component} from '../../node_modules/react'
import {Message} from './message';

export class ChatBox extends Component{
    render(){
        var elements = [];
        for (var i = 0; i < 8; i++) {
            elements.push(<Message  key={i}/>);
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