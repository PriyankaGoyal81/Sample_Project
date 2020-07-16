import React from 'react';
import {Component} from 'react';

class FetchFromAPI extends Component{
  constructor(){
    super()
    this.state={
      character:{}
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("http://localhost:3002/findByQueryMap78?filter=%7B%22where%22%3A%7B%22or%22%3A%5B%7B%22name%22%3A%22Pacific+Southwest%22%7D%2C%7B%22id%22%3A%226145%22%7D%5D%7D%7D")
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            })
        })

  }

  render(){
    return(
      <div>
        <p>////////////{this.state.character.name}</p>
      </div>   
    )
  }
}
export default FetchFromAPI