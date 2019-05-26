import React, {Component} from '../../node_modules/react'
import {Header} from './header'
import ChatBox from './chatBox';
import Message from './message';
import Compose from './compose';

export class Main extends Component{
    constructor(){
        super();
        this.changeUserName=this.changeUserName.bind(this)
    }
    
    state={
        userName:'Anon'
    }

    changeUserName(newUserName){
        this.setState({userName:newUserName})
    }

    render(){
        return(
            <div>
                <Header user={this.state.userName} changeUserName={this.changeUserName}/>
                <ChatBox/>
                <Message/>
                <Compose/>
            </div>
        );
    }
}

export default Main;