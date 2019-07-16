import React, { Component } from 'react'
import Building from '../../containers/Building'

class HomeTab extends Component{
  constructor(props){super(props);}

  render(){
    return (
      <div label="home">
        ur at home! <br/>
          <button className='round' onClick={() => this.props.harvest('bluebs', 1)}> </button> pick bluebs <br/>
          <button className='round' onClick={() => this.props.harvest('wood', 1)}> </button> gather sticks <br/>
          <button className='round' onClick={() => this.props.sendInfo('hi')}> </button> hi <br/>
        <div className="menu">
          buildings:
          {Object.keys(this.props.buildings).map(name =>
            <Building name={name}/>)}
        </div>
      </div>
    )
  }
}
export default HomeTab
