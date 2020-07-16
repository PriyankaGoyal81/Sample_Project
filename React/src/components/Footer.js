import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


// function Footer(){
//     return(
//       <div>
//         <footer>
//             This is my Footer Element;
//         </footer>
//       </div>
//     )
//   }
  
  class Footer extends Component{
    constructor(){
      super()
      this.state={
        answer: "Yes",
        name: "Priyanka",
        age: 38,
        isLoggedIn: true
      }
    }
    render(){
      let wordDisplay
      if(this.state.isLoggedIn==true){
        wordDisplay="In"
      }else{
        wordDisplay="Out"
      }
      return(
        <div>
          <footer>
             This is my Footer Element?{this.state.answer};
             <p>My name is {this.state.name} and my age is: {this.state.age}</p><br/>
             <p>You are Logged {wordDisplay}</p>
          </footer>
        </div>
      )
    }
  }

export default Footer