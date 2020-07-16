import React from 'react';
import ReactDOM from 'react-dom';
import CheckedData from './CheckedData';

function CheckedItem(props){
    return(
      <div>
        <input 
          type="checkbox"
          checked={props.item.completed}
          onChange={()=> props.handleChange(props.item.id)}
          />
          <p>{props.item.text}</p>
        
      </div>
    )
  }

export default CheckedItem