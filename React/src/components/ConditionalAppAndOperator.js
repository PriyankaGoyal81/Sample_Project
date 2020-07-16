import React from 'react';
import {Component} from 'react';

class ConditionalAppAndOperator extends Component{
  constructor(){
    super()
    this.state={
      unreadMessages: ["a","b"]
    }
  }

  render(){
    return(
      <div>
        {
            this.state.unreadMessages.length > 0 &&
            <h2>you have {this.state.unreadMessages.length} unread messages!</h2>
        }  
      </div>   
    )
  }
}
export default ConditionalAppAndOperator