import React from 'react';
import ReactDOM from 'react-dom';
export default ContactCard

function ContactCard(props){
    console.log(props)
    return(
        <div>
            <img src={props.contact.imgurl}></img>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
  }