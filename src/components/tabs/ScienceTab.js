import React, { Component } from 'react'
import Tech from '../../containers/Tech'
import Tree from 'react-d3-tree';

class ScienceTab extends Component{
  constructor(props){super(props); }

  displaySelected(){
    var selected = this.props.info.selectedTech
    var selectedTech = this.props.tech[selected]
    var displayResearch
    if (selectedTech.researched){
      displayResearch = <div>{"you've already researched this!"}<br/></div> }
    else{
      displayResearch = <div>{"research?"} <button className='round' onClick={() => this.props.research(selected)}> </button> <br/> </div> }
    return (
      <div>
        {selected} <br/>
        gives you lit shit <br/>
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
