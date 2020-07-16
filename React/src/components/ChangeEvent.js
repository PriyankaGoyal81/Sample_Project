import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


class ChangeEvent extends Component{
    constructor(){
      super()
      this.state={
       count:0
      }
      this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        // this.setState({count: 1})
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }    
        })
    }
    
    render(){

      return(
        <div>
             <h1>Count: {this.state.count}</h1><br/>
             <button onClick={this.handleClick}> Change! </button>
        </div>
      )
    }
  }

export default ChangeEvent