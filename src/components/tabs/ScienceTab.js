import React, { Component } from 'react'
import Tech from '../../containers/Tech'
import Tree from 'react-d3-tree';

class ScienceTab extends Component{
  constructor(props){super(props); }

  research(selected){
    var info = this.props.tech[selected]
    var enoughResources = true
    var prereqsSatisfied = true
    for (var resource in info.cost){
      if (info.cost[resource]>this.props.resources[resource]){
        enoughResources=false
        this.props.sendInfo('no resources :(')}}
    for (var parent in info.parents){
      if (!this.props.tech[info.parents[parent]].researched){
        prereqsSatisfied=false
        this.props.sendInfo('previous techs not researched yet :(')}}
    if (enoughResources & prereqsSatisfied){
      for(resource in info.cost){
        this.props.harvest(resource, -info.cost[resource])
        this.props.sendInfo('u spent '+ info.cost[resource] + ' ' + resource)}
      this.props.research(selected)
      this.props.applyModifiers(selected, 1)
      this.props.applyEffects(selected, 1)
      console.log(selected)
      switch (selected){
        case 'teaching':
          this.props.addJob('scholars')
          break
        case 'woodworking':
          this.props.addResource('boxes')
          break
        case 'fire':
          this.props.addBuilding('campfire')
          this.props.addTab('town', 'settlement')
          break
        case 'digging':
          this.props.addResource('clay')
          this.props.addResource('stone')
          this.props.addJob('diggers')
          break
        case 'pottery':
          this.props.addBuilding('furnace')
        case 'drawing':
          this.props.addResource('drawings')
          break
        case 'writing':
          this.props.addResource('books')
          break
        case 'cartography':
          this.props.addTab('map', 'map')
          break
        case 'construction':
          this.props.addBuilding('library')
          break
      }
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
        {selectedTech.description}<br/>
        cost:
          {Object.keys(selectedTech.cost).map(resource => <h4>&nbsp;&nbsp;{resource + ' '+ selectedTech.cost[resource]} </h4> )}
        {displayResearch} <br/>
      </div>
    )
  }
  render(){
    const techList = this.props.tech
    const techObjectsList = Object.keys(techList).map(
      name => <Tech name={name} techList={techList} research={this.props.research}/> )
    return (
      <div label="science" className="science">
        <div className="tree-wrapper">
          {techObjectsList}</div>
        <div className="tech-info">
          {this.displaySelected()} </div>
      </div>
    )
  }
}




export default ScienceTab
