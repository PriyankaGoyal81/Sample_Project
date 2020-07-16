import React from 'react';
import {Component} from 'react';
import Conditional from './Conditional';

class ConditionalApp extends Component{
  constructor(){
    super()
    this.state={
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render(){
    return(
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>   
    )
  }
}
export default ConditionalApp