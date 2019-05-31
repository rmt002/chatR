import React, {Component} from '../../node_modules/react'
import {Header} from './header'
import ChatBox from './chatBox';
import Compose from './compose';
import {socketConfig} from '../services/api'

export class Main extends Component{
    constructor(){
        super();
        socketConfig(' ');
    }
    
    state={
        userName:'Anon'
    }

    changeUserName=(newUserName)=>{
        this.setState({userName:newUserName})
    }

    render(){
        return(
            <div>
                <Header user={this.state.userName} changeUserName={this.changeUserName}/>
                <ChatBox/>
                <Compose user={this.state.userName}/>
            </div>
        );
    }
}

export default Main;