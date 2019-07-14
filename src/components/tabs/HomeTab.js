import React, { Component } from 'react'
import Building from '../../containers/Building'

class HomeTab extends Component{
  constructor(props){super(props);}

  render(){
    return (
      <div label="home">
        ur at home! <br/>
          <button onClick={() => this.props.changeBluebs(1)}> pick blueb </button>
          <button onClick={() => this.props.changeWood(1)}> chop wood </button>
          <button onClick={() => this.props.sendInfo('hi')}> hi </button>
        <div className="buildings">
          {Object.keys(this.props.buildingList).map(name =>
            <Building name={name}/>)}
        </div>
      </div>
    )
  }
}
export default HomeTab
