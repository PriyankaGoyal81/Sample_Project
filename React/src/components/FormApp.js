import React from 'react';
import {Component} from 'react';

class FormApp extends Component{
  constructor(){
    super()
    this.state={
     firstName:"",
     lastName:"",
     isFriendly:true,
     gender:"",
     favColor:"blue"
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
      const {name, value,type, checked} = event.target
      type === "checkbox" ? this.setState ({ [name] : checked}) : this.setState({ [name] : value})
  }

  render(){
 
    return(
      <form>
          <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
          <br/>
          <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
          <br/>
          <textarea value={"Some Default Value"} onChange={this.handleChange}/>
          <br/>
          <label>
            <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange}/>Is Friendly
          </label>
          <br/>
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male
          </label>
          <br/>
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female
          </label>
          <br/>
          <label>Favourite Color </label>
          <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
          </select>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <h1>You are {this.state.gender}</h1>
          <h1>Your favorite color is {this.state.favColor}</h1>
      </form>
    )
  }
}
export default FormApp