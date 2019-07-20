import React, { Component } from 'react'

class Building extends Component{
  constructor(props){super(props)}

  build(n){
    var info = this.props.buildings[this.props.name]
    var enoughResources = true
    var enoughBuildings = info.number+n
    for (var resource in info.cost){
      if (info.cost[resource]*n>this.props.resources[resource]){
        enoughResources = false
        this.props.sendInfo('no resources :(')}}
    if (enoughResources & enoughBuildings>0){
      for (resource in info.cost){
        this.props.harvest(resource, -info.cost[resource]*n)
        this.props.sendInfo(' u spent ' + info.cost[resource]*n + ' ' + resource + ' on a ' + this.props.name)
      }
      this.props.build(this.props.name, n)
      this.props.applyEffects(this.props.name, n)
    }
  }


  render(){
    if(!(this.props.visibleBuildings.includes(this.props.name))){return <div/>}
    var info = this.props.buildings[this.props.name]
    return(
      <div className = "menu-item">
        {this.props.name} ({info.number}): <button className='round' onClick={() => this.build(1)}> + </button> <button className='round' onClick={() => this.build(-1)}> - </button>
        <br />
        <div className = "menu-item-mouseover">
          {info.desc} <br />
          cost: <ul>
            {Object.entries(info.cost).map(entry => <li> {entry[0]}: {entry[1]} </li>)} </ul>
        </div>
      </div>
    )
  }
}

export default Building
