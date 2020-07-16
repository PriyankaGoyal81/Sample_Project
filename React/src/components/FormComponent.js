import React from 'react';
 
function FormComponent(props){
    return(
        <form>
            <input 
              type="text" 
              name="firstName" 
              value={props.data.firstName} 
              placeholder="First Name" 
              onChange={props.handleChange}/>
            <br/>
            <input 
              type="text" 
              name="lastName" 
              value={props.data.lastName} 
              placeholder="Last Name" 
              onChange={props.handleChange}/>
            <br/>
            <input 
              type="text" 
              name="age" 
              value={props.data.age} 
              placeholder="Age" 
              onChange={props.handleChange}/>
            <br/>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={props.data.gender==="male"} 
                onChange={props.handleChange}/>Male
            </label>
            <br/>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                checked={props.data.gender==="female"} 
                onChange={props.handleChange}/>Female
            </label>
            <br/>
  
            <label>Destination: </label>
            <select 
              name="destination" 
              value={props.data.destination} 
              onChange={props.handleChange}>
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
                checked={props.data.isVegen} 
                onChange={props.handleChange}/>Vegen?
            </label>
            <br/>
  
            <label>
              <input
                type="checkbox" 
                name="isKoshar" 
                checked={props.data.isKoshar} 
                onChange={props.handleChange}/>Koshar?
            </label>
            <br/>
  
            <label>
              <input
                type="checkbox" 
                name="isLactoseFree" 
                checked={props.data.isLactoseFree} 
                onChange={props.handleChange}/>Lactose Free?
            </label>
            <br/>
  
            <button>Submit</button>
  
            <h2>Enter Information: </h2>
            <p>Your Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your Age: {props.data.age}</p>
            <p>You gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restriction: </p>
            <p>Vegen: {props.data.isVegen ? "yes" : "no"}</p>
            <p>Koshar: {props.data.isKoshar ? "yes" : "no"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "yes" : "no"}</p>
        </form>
      )
    
}
export default FormComponent