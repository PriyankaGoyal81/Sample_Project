import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';
import CheckedItem from './CheckedItem';
import CheckedData from './CheckedData';

class CheckedApp extends Component{
    constructor(){
      super()
      this.state={
        checked: CheckedData
      }
      this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedChecked = prevState.checked.map(check => {
                if(check.id === id){
                    check.completed = !check.completed
                }
                return check
            })
            return {
                checked: updatedChecked
            }    
        })
    }
    render(){
      const CheckedItem = this.state.checked.map(item => <CheckedItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
      return(
        <div>
           <p>This is my Header</p>
        
      </div>
      )
    }
  }

export default CheckedApp