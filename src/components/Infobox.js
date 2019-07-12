import React, { Component } from 'react'
//doesnt use redux cuz its simple

class Infobox extends Component{
  constructor(props){
    super(props);
    this.props = {info: 0}
  };
  render(){
    return (
      <div class="infobox">
        {this.props.info.map((text) =>
          <Info text = {text} />
        )}
      </div>
    )
  }
}

function Info(props){
  return <div> {props.text} <br /> </div>
}

export default Infobox
