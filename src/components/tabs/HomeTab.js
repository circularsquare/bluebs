import React, { Component } from 'react'
import Building from '../../containers/Building'

class HomeTab extends Component{
  constructor(props){super(props);}

  render(){
    var studyButton = (<div className='menu-item'> <button className='round' onClick={() => this.props.harvest('knowledge', .1)}> </button> study <br/> </div>)
    if (this.props.info.progression<2){studyButton=<div/>}

    return (
      <div label="home">
        ur at home! <br/>
        <div className="menu-smol">
          <div className='menu-item'> <button className='round' onClick={() => this.props.harvest('bluebs', 1)}> </button> pick bluebs <br/> </div>
          <div className='menu-item'> <button className='round' onClick={() => this.props.harvest('wood', 1)}> </button> gather sticks <br/> </div>
          {studyButton}
          <div className='menu-item'> <button className='round' onClick={() => this.props.sendInfo('hi')}> </button> hi <br/> </div>
        </div>
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
