import React, { Component } from '../../node_modules/react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import {MessagingSocket} from '../services/api'

export class Compose extends Component {
    constructor(props){
        super();
    }
    newMessage=(event)=>{
        var newMessage=document.getElementById('composer').value;
        document.getElementById('composer').value="";
        var messageObject={
            name:this.props.user,
            message:newMessage
        }
        var transmittor= new MessagingSocket();
        transmittor.transmit(messageObject);
    }
    render() {
        return (
            <div className="compose_box">
                <InputGroup className="mb-3  justify-content-center">
                    <FormControl 
                        placeholder="Enter your message"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        id="composer"
                    />
                    <InputGroup.Append>
                        <button className="btn btn-primary" type="submit" onClick={this.newMessage}>Send Message</button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        );
    }
}

export default Compose;