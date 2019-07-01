import React, { Component } from 'react'

class Tabs extends Component{
  render(){
    const {inputData} = this.props
    return (
      <h1> yo this is tabs component ... {inputData} </h1>
    )
  }
}

export default Tabs
