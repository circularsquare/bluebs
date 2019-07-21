import React, { Component } from 'react'
import Building from '../../containers/Building'




class HomeTab extends Component{
  constructor(props){super(props);}

  render(){
    var studyButton = (<div className='menu-item'> <button className='round' onClick={() => this.props.harvest('knowledge', .1)}> + </button> study <br/> </div>)
    if (this.props.info.progression<2){studyButton=<div/>}
    var craftingMenu = (
      <div className="menu-crafting">
        crafting:
        {Object.keys(this.props.info.recipes).map(name =>
          <CraftingLine name={name} info={this.props.info} resources={this.props.resources} harvest={this.props.harvest} sendInfo={this.props.sendInfo}/>)}
      </div>)
    if (this.props.info.progression<2){craftingMenu=<div/>}

    return (
      <div label="home">
        ur at home! <br/>
        <div className="menu-smol">
          <div className='menu-item'> <button className='round' onClick={() => this.props.harvest('bluebs', 1)}> + </button> pick bluebs <br/> </div>
          <div className='menu-item'> <button className='round' onClick={() => this.props.harvest('wood', 1)}> + </button> gather sticks <br/> </div>
          {studyButton}
          <div className='menu-item'> <button className='round' onClick={() => this.props.sendInfo('hi')}> + </button> hi <br/> </div>
        </div>

        {craftingMenu}

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

class CraftingLine extends Component{
  constructor(props){super(props)}
  craft(name, n){
    var info = this.props.info.recipes[name]
    var enoughResources = true
    if (Object.keys(this.props.resources).includes('max'+name)){
      if (this.props.resources[name]+n > this.props.resources['max'+name]){
        n = this.props.resources['max'+name]-this.props.resources[name]}}
    for (var resource in info){
      if (info[resource]*n>this.props.resources[resource]){
        enoughResources=false
        this.props.sendInfo('no resources :(')}}
    if (enoughResources & n>0){
      for(resource in info){
        this.props.harvest(resource, -info[resource]*n)
        this.props.sendInfo('u spent '+ info[resource] + ' ' + resource)}
      this.props.harvest(name, n)}
  }
  render(){
    if(this.props.info.visibleResources.includes(this.props.name)){
      return (
        <div className='menu-item'>
          <button className='round-r' onClick = {()=>this.craft(this.props.name, 1)}> + </button>
          {this.props.name}
          <div className='menu-item-mouseover'>
            cost: <ul>
              {Object.entries(this.props.info.recipes[this.props.name]).map(entry => <li> {entry[0]}: {entry[1]} </li>)} </ul>
          </div>
        </div>
      )}
    else{return(<div />)}
  }
}
