import React, { Component } from 'react'

class Infobox extends Component{

  constructor(props){
    super(props);
    this.state = {info: "henlo"};
  };

  render(){
    return (
      <div class="infobox">
        <div id="info">{this.props.info}</div>
      </div>
    )
  }
}


export default Infobox
