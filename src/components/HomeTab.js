import React, { Component } from 'react'

class HomeTab extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div label="home">
        ur at home! <br/>
          <button onClick={() => this.props.changeBluebs(1)}> pick blueb </button><br/>
          <button onClick={() => this.props.sendInfo('hi')}> hi </button>
      </div>
    )
  }
}

export default HomeTab
