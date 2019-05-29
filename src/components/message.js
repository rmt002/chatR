import React, { Component } from '../../node_modules/react'
import Card from 'react-bootstrap/Card'

export class Message extends Component {
    render() {
        return (
            <div className="message">
                <Card>
                    <Card.Header>Larry</Card.Header>
                    <Card.Body>
                            This is the first test Message to the flexibility of the template that you have built.
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Message;