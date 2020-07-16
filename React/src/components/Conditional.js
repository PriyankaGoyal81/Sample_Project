import React from 'react';

function Conditional(props){
    if(props.isLoading === true){
      return(
        <h1>loading.....</h1>
      )
    } else {
        return(
          <h1>Some sool Stuff about Conditional rendering</h1>
        )
    }
}
export default Conditional