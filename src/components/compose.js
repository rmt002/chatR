import React, { Component } from '../../node_modules/react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export class Compose extends Component {
    render() {
        return (
            <div className="justify-content-center">
                <InputGroup className="mb-3 col-6 justify-content-center">
                    <FormControl 
                        placeholder="Enter your message"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <button className="btn btn-primary">Send Message</button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        );
    }
}

export default Compose;