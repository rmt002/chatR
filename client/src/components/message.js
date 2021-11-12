import React, { Component } from '../../node_modules/react'
import Card from 'react-bootstrap/Card'

export class Message extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <div className="message">
                <Card>
                    <Card.Header>{this.props.value.name}</Card.Header>
                    <Card.Body>
                            {this.props.value.message}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Message;