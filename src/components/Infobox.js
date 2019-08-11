import React, { Component } from 'react'

class Infobox extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="infobox">
        {this.props.info.map((info, index) =>
          <div key={index}> {info} <br /> </div>
        )}
      </div>
    )
  }
}

function Info(props){
  return <div> {props.text} <br /> </div>
}

export default Infobox
