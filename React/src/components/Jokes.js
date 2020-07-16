import React from 'react';
import ReactDOM from 'react-dom';
export default Jokes

function Jokes(props){
    return(
        <div>
            <h3 style={{display:props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
        </div>
    )
  }

