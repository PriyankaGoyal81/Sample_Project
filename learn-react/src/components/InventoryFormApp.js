import React from 'react';
import {Component} from 'react';

class FormTravelApp extends Component{
  constructor(){
    super()
    this.state={
      itemNumber:"",
      itemCategory:"",
      itemDescription:"",
      includeInactiveItem: false,
      lowInventory: false 
      
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
        <label><b>Search</b><br/></label><br/>
        <label><b>Item Number:</b></label>
        <input 
            type="text" 
            name="itemNumber" 
            value={this.state.itemNumber} 
            placeholder="Item Number" 
            onChange={this.handleChange}/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label><b>Item Category:</b></label>
          <select 
            name="itemCategory" 
            value={this.state.itemCategory} 
            onChange={this.handleChange}>
              <option value="">--Please Choose a Item Category--</option>
              <option value="womenClothes">Women clothes</option>
              <option value="menClothes">Men Clothes</option>
              <option value="kidsClothes">Kids clothes</option>
          </select>
          <br/><br/>
          <b>Item Description:</b>
          <input 
            type="text" 
            name="itemDescription" 
            value={this.state.itemDescription} 
            placeholder="Item Description" 
            onChange={this.handleChange}/>
          <br/><br/>
          
          

          <label><b>Include Inactive Item:</b>
            <input
              type="checkbox" 
              name="includeInactiveItem" 
              checked={this.state.includeInactiveItem} 
              onChange={this.handleChange}/>
          </label>
          <br/><br/>

          <label><b>Low Inventory</b>
            <input
              type="checkbox" 
              name="lowInventory" 
              checked={this.state.lowInventory} 
              onChange={this.handleChange}/>
          </label>
          <br/><br/>

          <button>Search</button>&nbsp;&nbsp;
          <button>Reset</button>&nbsp;&nbsp;
          <button>Create New Item</button>

          <h2>Enter Information: </h2>
          <p>Item Number: {this.state.itemNumber}</p>
          <p>Item Category: {this.state.itemCategory}</p>
          <p>Item Description: {this.state.itemDescription}</p>
          <p>Include Inactive Item: {this.state.includeInactiveItem ? "yes" : "no"}</p>
          <p>Low Inventory: {this.state.lowInventory ? "yes" : "no"}</p>
      </form>
    )
  }
}
export default FormTravelApp