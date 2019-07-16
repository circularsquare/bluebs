import React, { Component } from 'react'
//doesnt use redux cuz its simple

class Infobox extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="infobox">
        {this.props.info.map((info) =>
          <div> {info} <br /> </div>
        )}
      </div>
    )
  }
}

function Info(props){
  return <div> {props.text} <br /> </div>
}

export default Infobox
