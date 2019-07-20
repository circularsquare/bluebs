import React, { Component } from 'react'
import Tech from '../../containers/Tech'
import Tree from 'react-d3-tree';

class ScienceTab extends Component{
  constructor(props){super(props); }

  research(selected){
    this.props.research(selected)
    console.log(selected)
    switch (selected){
      case 'cartography':
        this.props.addTab('map', 'map')
    }
  }

  displaySelected(){
    var selected = this.props.info.selectedTech
    var selectedTech = this.props.tech[selected]
    var displayResearch
    if (selectedTech.researched){
      displayResearch = <div>{"researched"}<br/></div> }
    else{
      displayResearch = <div>{"research?"} <button className='round' onClick={() => this.research(selected)}> </button> <br/> </div> }
    return (
      <div>
        <h2>{selected}</h2>
        {selectedTech.description} <br/>
        {displayResearch} <br/>
      </div>
    )
  }
  render(){
    const techList = this.props.tech
    const techObjectsList = Object.keys(techList).map(
      name => <Tech name={name} techList={techList} research={this.props.research}/> )
    return (
      <div label="science">
        <div className="tree-wrapper">
          {techObjectsList}</div>
        <div className="tech-info">
          {this.displaySelected()} </div>
      </div>
    )
  }
}




export default ScienceTab
