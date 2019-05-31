import React, { Component } from '../../node_modules/react'
import Nav from '../../node_modules/react-bootstrap/Nav'

export class Header extends Component {
    constructor(props){
        super();
    }

    state={
        editMode:-1
    }
    handleChange=(event)=>{
        this.props.changeUserName(event.target.value)
    }
    render() {
        if(this.state.editMode===-1){
            return (
                <div>
                    <Nav className="row justify-content-between header">
                        <Nav.Item className="col-4">
                            <Nav.Link>betChat</Nav.Link>
                        </Nav.Item>
                        <div className="col-3">
                            <button className="btn btn-primary" onClick={()=>{this.setState({editMode:1})}}>{this.props.user}   </button>
                        </div>
                    </Nav>
                </div>
            );
        }
        if(this.state.editMode===1){
            return(
                <div className="row justify-content-end editHeader">
                    <Nav>
                        <Nav.Item>
                        <input className="form-control" placeholder="New username" onChange={this.handleChange}></input>
                        </Nav.Item>
                        <Nav.Item className="col-2">
                        <button className="btn btn-primary" type="submit" onClick={()=>{this.setState({editMode:-1})}}>Save</button>

                        </Nav.Item>
                        
                    </Nav>
                </div>
            );
        }
        
    }
}

export default Header;