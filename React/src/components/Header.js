import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';


// function Header(){
//     return(
//       <div>
//         <header className='navbar'>
//             This is my Header Element;
//         </header>
//       </div>
//     )
//   }

class Header extends Component{
  render(){
    return(
      <div>
        <header className='navbar'>
            This is my Header
        </header>
      </div>
    )
  }
}

export default Header