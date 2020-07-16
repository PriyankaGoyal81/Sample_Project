import React from 'react';
import {Component} from 'react';

class FormTravelApp extends Component{
  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      age:0,
      gender:"",
      destination:"",
      dietaryRestriction:"",
      isVegen: false,
      isKoshar: false,
      isLactoseFree: false 
      
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
      const {name, value,type, checked} = event.target
      type === "checkbox" ? 
        this.setState ({
            [name] : checked
          }) 
        : 
        this.setState({ [name] : value})
  }

  render(){
 
    return(
      <form>
          <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            placeholder="First Name" 
            onChange={this.handleChange}/>
          <br/>
          <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            placeholder="Last Name" 
            onChange={this.handleChange}/>
          <br/>
          <input 
            type="text" 
            name="age" 
            value={this.state.age} 
            placeholder="Age" 
            onChange={this.handleChange}/>
          <br/>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={this.state.gender==="male"} 
              onChange={this.handleChange}/>Male
          </label>
          <br/>
          <label>
            <input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={this.state.gender==="female"} 
              onChange={this.handleChange}/>Female
          </label>
          <br/>

          <label>Destination: </label>
          <select 
            name="destination" 
            value={this.state.destination} 
            onChange={this.handleChange}>
              <option value="">--Please Choose a destination--</option>
              <option value="germerny">Germerny</option>
              <option value="norway">Norway</option>
              <option value="north pole">North Pole</option>
              <option value="south pole">South Pole</option>
          </select>
          <br/>
          <label>
            <input
              type="checkbox" 
              name="isVegen" 
              checked={this.state.isVegen} 
              onChange={this.handleChange}/>Vegen?
          </label>
          <br/>

          <label>
            <input
              type="checkbox" 
              name="isKoshar" 
              checked={this.state.isKoshar} 
              onChange={this.handleChange}/>Koshar?
          </label>
          <br/>

          <label>
            <input
              type="checkbox" 
              name="isLactoseFree" 
              checked={this.state.isLactoseFree} 
              onChange={this.handleChange}/>Lactose Free?
          </label>
          <br/>

          <button>Submit</button>

          <h2>Enter Information: </h2>
          <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your Age: {this.state.age}</p>
          <p>You gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restriction: </p>
          <p>Vegen: {this.state.isVegen ? "yes" : "no"}</p>
          <p>Koshar: {this.state.isKoshar ? "yes" : "no"}</p>
          <p>Lactose Free: {this.state.isLactoseFree ? "yes" : "no"}</p>
      </form>
    )
  }
}
export default FormTravelApp