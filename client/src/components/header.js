import React, { Component } from '../../node_modules/react'
import Nav from '../../node_modules/react-bootstrap/Nav'

export class Header extends Component {
    constructor(props){
        super();
    }

    state={
        editMode:-1
    }
    
    handleChange=()=>{
        if(document.getElementById('username').value!==""){
            this.props.changeUserName(document.getElementById('username').value)
        }
        this.setState({editMode:-1})
    }
    
    enterPressed=(event)=>{
        if(event['which']===13 || event['keycode']===13){
            this.handleChange();
        }
    }

    render() {
        if(this.state.editMode===-1){
            return (
                <div>
                    <Nav className="row justify-content-between header">
                        <Nav.Item className="col-4">
                            <Nav.Link>ChatApp</Nav.Link>
                        </Nav.Item>
                        <div className="col-2 anon">
                            <button className="btn btn-primary" onClick={()=>{this.setState({editMode:1})}}>{this.props.user}   </button>
                        </div>
                    </Nav>
                </div>
            );
        }
        if(this.state.editMode===1){
            return(
                <div>
                    <Nav className="row  header">
                        <Nav.Item className="col-5">
                            <Nav.Link>ChatApp</Nav.Link>
                        </Nav.Item>
                        <div className="form-inline justify-content-end  col-7">
                            <input className="form-control useredit" id="username" placeholder="New username"  onKeyPress={this.enterPressed}></input>
                            <button className="btn btn-primary anon " type="submit" onClick={this.handleChange}>Save</button>
                        </div>
                    </Nav>
                </div>
            );
        }
    }
}

export default Header;