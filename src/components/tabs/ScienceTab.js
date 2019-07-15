import React, { Component } from 'react'

class HomeTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var birbs = this.props.birbs
    return (
      <div label="science">
        time to study!
      </div>
    )
  }
}

export default HomeTab
